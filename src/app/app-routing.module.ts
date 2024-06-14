import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/tickets', pathMatch:'full'},
  {path: 'tickets', loadChildren: () => import('./tickets/tickets-routing.module').then(m => m.TicketsRoutingModule)},
  {path: '**', loadChildren: () => import('./page-not-found/page-not-found-routing.module').then(m => m.PageNotFoundRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
