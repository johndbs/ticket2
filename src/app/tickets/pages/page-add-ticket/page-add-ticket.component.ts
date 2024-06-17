import { Component } from '@angular/core';
import { Ticket } from '../../../core/models/ticket';
import { TicketI } from '../../../core/interfaces/ticket-i';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-ticket',
  templateUrl: './page-add-ticket.component.html',
  styleUrl: './page-add-ticket.component.css'
})
export class PageAddTicketComponent {

  public item: TicketI = new Ticket();

  constructor(private ticketService: TicketService,
    private router: Router
  ){}

  public action(item: Ticket): void {
    this.ticketService.createTicket(item).subscribe(()=> {
      this.router.navigate(['tickets']);
    });
  }

}
