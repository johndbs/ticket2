import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddTicketComponent } from './page-add-ticket.component';
import { DebugElement } from '@angular/core';
import { FormTicketComponent } from '../../components/form-ticket/form-ticket.component';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { TicketI } from '../../../core/interfaces/ticket-i';

describe('PageAddTicketComponent', () => {
  let component: PageAddTicketComponent;
  let fixture: ComponentFixture<PageAddTicketComponent>;
  let debugElement: DebugElement;

  let ticketServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {

    ticketServiceMock = {
      createTicket: jest.fn().mockReturnValue(of({id: 1, title: 'Ticket 1', description: 'Description 1 ...'}))
    };

    routerMock = {
      navigate: jest.fn()
    };


    await TestBed.configureTestingModule({
      declarations: [PageAddTicketComponent, FormTicketComponent],
      providers: [
        {provide: TicketService, useValue: ticketServiceMock},
        {provide: Router, useValue: routerMock}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAddTicketComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    
  });

  it('should create', () => {
    fixture.detectChanges(); // Triggers ngOnInit
    expect(component).toBeTruthy();
  });

  it('should call createTicket', ()=>{

    const ticket: TicketI = {id: 1, title: 'Title', description: 'Description ...'};
    
    fixture.detectChanges(); // Triggers ngOnInit

    component.action(ticket);

    expect(ticketServiceMock.createTicket).toHaveBeenCalledWith(ticket);
    expect(routerMock.navigate).toHaveBeenCalledWith(['tickets']);
  });


});
