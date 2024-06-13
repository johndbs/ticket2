import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListTicketsComponent } from './page-list-tickets.component';

describe('PageListTicketsComponent', () => {
  let component: PageListTicketsComponent;
  let fixture: ComponentFixture<PageListTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageListTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageListTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
