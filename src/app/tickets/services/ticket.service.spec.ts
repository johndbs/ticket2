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

  afterEach(()=>{
    httpMock.verify();
  });

});
