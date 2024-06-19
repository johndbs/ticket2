import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditTicketComponent } from './page-edit-ticket.component';
import { FormTicketComponent } from '../../components/form-ticket/form-ticket.component';
import { ActivatedRoute, Router, RouterModule, Routes, provideRouter } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { TicketI } from '../../../core/interfaces/ticket-i';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


describe('PageEditTicketComponent', () => {
  let component: PageEditTicketComponent;
  let fixture: ComponentFixture<PageEditTicketComponent>;
  let debugElement: DebugElement;

  let activatedRouteMock: any;
  let routerMock: any;
  let ticketServiceMock: any;


  beforeEach(async () => {

    ticketServiceMock = {
      getTicket: jest.fn().mockReturnValue(of({id: 1, title: 'Ticket 1', description: 'Description 1 ...'})),
      updateTicket : jest.fn().mockReturnValue(of(null))
    };

    routerMock = {
      navigate : jest.fn()
    };

    activatedRouteMock = {
      // route : {
        snapshot: {
          params: {id: 1} 
        // }
      }
    };


    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, // Required to prevent the log error: NG0303: Can't bind to 'formGroup' since it isn't a known property of 'form' (used in the 'FormTicketComponent' component template).
      //RouterTestingModule.withRoutes([]) //Deprecated Required to prevent the log error: De même avec la trace dans les logs: NG0303: Can't bind to 'routerLink' since it isn't a known property of 'a' (used in the 'BtnComponent' component template).
       //RouterModule.forRoot([]) // Not required, Replace the RouterTestingModule,
      ], 
      declarations: [PageEditTicketComponent, FormTicketComponent],
      providers: [
        //provideRouter([]), // Not required, Replace the RouterTestingModule
        {provide: ActivatedRoute, useValue: activatedRouteMock},
        {provide: Router, useValue: routerMock},
        {provide: TicketService, useValue: ticketServiceMock}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEditTicketComponent);
    component = fixture.componentInstance;
    debugElement =  fixture.debugElement;
    
  });

  it('should create', () => {
    fixture.detectChanges(); // triggers ngOnInit
    expect(component).toBeTruthy();
  });


  it('should fetch the ticket on init', () => {
    fixture.detectChanges(); // triggers ngOnInit

    expect(ticketServiceMock.getTicket).toHaveBeenCalledWith(1);

    component.item$.subscribe((item)=>{
      expect(item).toEqual({id: 1, title: 'Ticket 1', description: 'Description 1 ...'});
    });

  });

  it('should call updateTicket and navigate on action', ()=>{
    const updatedTicket: TicketI = {id: 1, title: 'Updated Ticket 1', description: 'Updated Description 1 ...'};

    fixture.detectChanges(); // triggers ngOnInit

    component.action(updatedTicket);

    expect(ticketServiceMock.updateTicket).toHaveBeenCalledWith(updatedTicket);
    expect(routerMock.navigate).toHaveBeenCalledWith(['tickets']);

  });


  it('should pass the ticket data to the form', ()=>{
    fixture.detectChanges(); // triggers ngOninit

    const formTicketElement = debugElement.query(By.css('app-form-ticket'));

    expect(formTicketElement).toBeTruthy();
    expect(formTicketElement.componentInstance.init).toEqual({id: 1, title: 'Ticket 1', description: 'Description 1 ...'});
  });


});
