import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListTicketsComponent } from './pages/page-list-tickets/page-list-tickets.component';
import { PageAddTicketComponent } from './pages/page-add-ticket/page-add-ticket.component';
import { PageEditTicketComponent } from './pages/page-edit-ticket/page-edit-ticket.component';

const routes: Routes = [
  {path: '', component: PageListTicketsComponent},
  {path: 'add', component: PageAddTicketComponent},
  {path: 'edit/:id', component:PageEditTicketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
