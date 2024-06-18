import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComponent } from './btn.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('BtnComponent', () => {
  let component: BtnComponent;
  let fixture: ComponentFixture<BtnComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [BtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render a link with the correct routerLink and label', ()=> {
    component.destRoute = '/test-route';
    component.label = 'Test Label';
    fixture.detectChanges(); // Ensure the component is fully rendered

    const linkDebugElement = debugElement.query(By.css('a'));
    expect(linkDebugElement).toBeTruthy();

    const linkElement = linkDebugElement.nativeElement;
    expect(linkElement.getAttribute('ng-reflect-router-link')).toBe('/test-route');
    expect(linkElement.textContent).toBe('Test Label');
  });

});
