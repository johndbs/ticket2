import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


@Component({
  selector: 'app-host',
  template: `
    <app-ui>
      <nav class="tr-nav">Navigation Content</nav>
      <section class="tr-content">Main Content</section>
    </app-ui>
  `
})
class HostComponent {}


describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<HostComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiComponent, HostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render header with h1 containing "Ticket"', ()=>{
    const h1DebugElement = debugElement.query(By.css('header h1'));
    expect(h1DebugElement).toBeTruthy();
    const h1 = h1DebugElement.nativeElement;
    expect(h1.textContent).toBe('Ticket');
  });

  it('should render ng-content with .tr-nav content', () => {
    const navContent = debugElement.query(By.css('header .tr-nav')).nativeElement;
    expect(navContent).toBeTruthy();
    expect(navContent.textContent).toBe('Navigation Content');
  });

  it('should render ng-content with .tr-content content', () => {
    const mainContent = debugElement.query(By.css('main div .tr-content')).nativeElement;
    expect(mainContent).toBeTruthy();
    expect(mainContent.textContent).toBe('Main Content');
  });


});
