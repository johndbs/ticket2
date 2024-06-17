import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TicketService } from './ticket.service';
import { Ticket } from '../../core/models/ticket';


describe('TicketService', () => {
  let service: TicketService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TicketService]
    });
    service = TestBed.inject(TicketService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should retrieve tickets from the API via GET', () => {
    const expectedTickets: Ticket[] = [
      {id: 1, title: 'Ticket 1', description: 'Description 1'},
      {id: 2, title: 'Ticket 2', description: 'Description 2'}
    ];

    service.getTickets().subscribe(tickets => {
      expect(tickets.length).toBe(2);
      expect(tickets).toEqual(expectedTickets);
    });

    const request = httpMock.expectOne(`${service['apiUrl']}`);
    expect(request.request.method).toBe('GET');
    
    request.flush(expectedTickets);
  });

  it('should retrieve a ticket by it id from the API via GET', () => {
    
    const ticketId: number = 1;
    const expectedTicket: Ticket =  new Ticket({id: ticketId, title: 'One ticket', description: 'One ...'});


    service.getTicket(ticketId).subscribe(ticket => {
      expect(ticket).toEqual(expectedTicket);
    });

    const request = httpMock.expectOne(`${service['apiUrl']}/${ticketId}`);
    expect(request.request.method).toBe('GET');

    request.flush(expectedTicket);
  });

  it('should create a ticket via POST', () => {
    const newTicket: Ticket = new Ticket({title: 'New ticket', description: 'New ...'});

    service.createTicket(newTicket).subscribe(ticket => {
      expect(ticket).toEqual(newTicket);
    });

    const request = httpMock.expectOne(`${service['apiUrl']}`);
    expect(request.request.method).toBe('POST');

    request.flush(newTicket);
  });

  it('should update a ticket via PUT', () => {
    const ticketId: number = 1;
    const updatedTicket: Ticket = new Ticket({id: ticketId, title: 'Updated ticket', description: 'Updated ...'});

    service.updateTicket(updatedTicket).subscribe(ticket => {
      expect(ticket).toEqual(updatedTicket);
    });

    const request = httpMock.expectOne(`${service['apiUrl']}/${ticketId}`);
    expect(request.request.method).toBe('PUT');

    request.flush(updatedTicket);
  }); 

  it('should delete a ticket via DELETE', () => {
    const ticketId: number = 1;

    service.deleteTicket(ticketId).subscribe();

    const request = httpMock.expectOne(`${service['apiUrl']}/${ticketId}`);
    expect(request.request.method).toBe('DELETE');

    request.flush(null);
  });

  afterEach(()=>{
    httpMock.verify();
  });

});
