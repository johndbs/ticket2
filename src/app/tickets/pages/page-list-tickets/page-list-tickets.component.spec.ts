import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTicketsComponent } from './page-list-tickets.component';
import { DebugElement } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { BtnComponent } from '../../../shared/components/btn/btn.component';
import { of } from 'rxjs';
import { TicketI } from '../../../core/interfaces/ticket-i';
import { Ticket } from '../../../core/models/ticket';
import { By } from '@angular/platform-browser';

describe('PageListTicketsComponent', () => {
  let component: PageListTicketsComponent;
  let fixture: ComponentFixture<PageListTicketsComponent>;
  let ticketServiceMock: any;
  let routerMock: any;
  let debugElement: DebugElement;

  beforeEach(async () => {
    
  
    ticketServiceMock = {
      getTickets: jest.fn().mockReturnValue(of([])),
      deleteTicket: jest.fn().mockReturnValue(of([]))
    };

    routerMock = {
      navigate: jest.fn()
    };

    await TestBed.configureTestingModule({
      declarations: [PageListTicketsComponent, BtnComponent],
      providers: [
        {provide: TicketService, useValue: ticketServiceMock},
        {provide: Router, useValue: routerMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListTicketsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch tickets on init', ()=>{
    const tickets: TicketI[] = [
      {id: 1, title: 'Test ticket 1', description: 'Description 1'},
      {id: 2, title: 'Test ticket 2', description: 'Description 2'}
    ];
  
    ticketServiceMock.getTickets.mockReturnValue(of(tickets));
    // Ensure the mock is set before calling detectChanges
    expect(ticketServiceMock.getTickets).not.toHaveBeenCalled();

    fixture.detectChanges(); // triggers ngOnInit

    expect(ticketServiceMock.getTickets).toHaveBeenCalled();
    expect(component.tickets.length).toBe(2);
    expect(component.tickets).toEqual(tickets);
  
  });

  it('should render tickets in the table', ()=> {
    const tickets: TicketI[] = [
      {id: 1, title: 'Test ticket 1', description: 'Description 1'},
      {id: 2, title: 'Test ticket 2', description: 'Description 2'}
    ];

    ticketServiceMock.getTickets.mockReturnValue(of(tickets));

    fixture.detectChanges(); // triggers ngOnInit

    const rows = debugElement.queryAll(By.css('tbody tr'));
    
    expect(rows.length).toBe(2);
    expect(rows[0].nativeElement.textContent).toContain('Test ticket 1');
    expect(rows[1].nativeElement.textContent).toContain('Test ticket 2');
  });

  it('should navigate to edit ticket on edit button click', () => {
    const tickets: TicketI[] = [
      {id: 1, title: 'Test ticket 1', description: 'Description 1'}
    ];

    ticketServiceMock.getTickets.mockReturnValue(of(tickets));

    fixture.detectChanges(); // triggers ngOnInit

    const editButton = debugElement.query(By.css('button')).nativeElement;

    editButton.click();

    expect(routerMock.navigate).toHaveBeenCalledWith(['tickets', 'edit', 1]);
  });

  it('should delete ticket and refresh the list on delete button click', () => {
    const tickets: TicketI[] = [
      {id: 1, title: 'Test ticket 1', description: 'Description 1'}
    ];

    ticketServiceMock.getTickets.mockReturnValue(of(tickets));
    ticketServiceMock.deleteTicket.mockReturnValue(of(null));

    fixture.detectChanges(); // triggers ngOnInit

    const deleteButton = debugElement.queryAll(By.css('button'))[1].nativeElement;

    deleteButton.click();

    expect(ticketServiceMock.deleteTicket).toHaveBeenCalledWith(1);
    expect(ticketServiceMock.getTickets).toHaveBeenCalled();
  });

});
