import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { PageEditTicketComponent } from './pages/page-edit-ticket/page-edit-ticket.component';
import { PageAddTicketComponent } from './pages/page-add-ticket/page-add-ticket.component';
import { PageListTicketsComponent } from './pages/page-list-tickets/page-list-tickets.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageEditTicketComponent,
    PageAddTicketComponent,
    PageListTicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule
  ]
})
export class TicketsModule { }
