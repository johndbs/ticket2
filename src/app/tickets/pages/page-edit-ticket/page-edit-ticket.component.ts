import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketI } from '../../../core/interfaces/ticket-i';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-page-edit-ticket',
  templateUrl: './page-edit-ticket.component.html',
  styleUrl: './page-edit-ticket.component.css'
})
export class PageEditTicketComponent implements OnInit{

  public item$!: Observable<TicketI>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService
  ){}

  ngOnInit(): void {
      const itemId: number = this.route.snapshot.params['id'];
      this.item$ = this.ticketService.getTicket(itemId);
  }

  public action(item: TicketI): void{
    this.ticketService.updateTicket(item).subscribe((data) => {
      this.router.navigate(['tickets']);
    });
  }


}
