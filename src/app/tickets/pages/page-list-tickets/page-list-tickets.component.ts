import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, concatMap, of } from 'rxjs';
import { Ticket } from '../../../core/models/ticket';
import { TicketI } from '../../../core/interfaces/ticket-i';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-page-list-tickets',
  templateUrl: './page-list-tickets.component.html',
  styleUrl: './page-list-tickets.component.css'
})
export class PageListTicketsComponent implements OnInit {

  tickets: TicketI[] = [];

  constructor(private ticketService: TicketService, private router: Router){} 

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }

  public edit(ticket: TicketI): void {
    this.router.navigate(['tickets', 'edit', ticket.id]);
  }

  public delete(ticket: TicketI): void {

    this.ticketService.deleteTicket(ticket.id).pipe(
      concatMap(()=> this.ticketService.getTickets()),
      catchError(error => {
        console.error('Error deleting ticket or fetching tickets', error);
        return of([]);
      })
    ).subscribe((tickets)=> {
      this.tickets = tickets;
    });

  }

}
