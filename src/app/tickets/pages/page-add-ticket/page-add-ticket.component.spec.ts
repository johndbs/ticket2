import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddTicketComponent } from './page-add-ticket.component';

describe('PageAddTicketComponent', () => {
  let component: PageAddTicketComponent;
  let fixture: ComponentFixture<PageAddTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAddTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAddTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
