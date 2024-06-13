import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditTicketComponent } from './page-edit-ticket.component';

describe('PageEditTicketComponent', () => {
  let component: PageEditTicketComponent;
  let fixture: ComponentFixture<PageEditTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEditTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEditTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
