import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ticket } from '../../../core/models/ticket';
import { TicketI } from '../../../core/interfaces/ticket-i';

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

}
