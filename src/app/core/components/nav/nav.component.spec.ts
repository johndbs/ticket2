import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a link with correct routerLink', () => {
    const compiled = fixture.nativeElement;

    const links = debugElement.queryAll(By.css('a'));

    expect(links.length).toBe(2);
    expect(links[0].attributes['routerLink']).toBe('/tickets');
    expect(links[0].nativeElement.textContent).toContain('Tickets');

    expect(links[1].attributes['routerLink']).toBe('/unknown');
    expect(links[1].nativeElement.textContent).toContain('Other');

  });


});
