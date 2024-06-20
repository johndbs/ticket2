import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTicketComponent } from './form-ticket.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormTicketComponent', () => {
  let component: FormTicketComponent;
  let fixture: ComponentFixture<FormTicketComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [FormTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTicketComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    
  });

  it('should create', () => {
    component.init = {id: 1, title: 'Ticket 1', description: 'Description ...'};

    fixture.detectChanges(); // triggers ngOnInit
    
    expect(component).toBeTruthy();
  });


  it('should initialize the form with input values', () => {
    component.init = {id: 1, title: 'Ticket 1', description: 'Description ...'};

    fixture.detectChanges(); // triggers ngOnInit
    
    expect(component.form.get('title')?.value).toBe('Ticket 1');
    expect(component.form.get('description')?.value).toBe('Description ...');
  });

  it('should show error message when title is touched and invalid', () => {
    component.init = {id: 1, title: 'Ticket 1', description: 'Description ...'};

    fixture.detectChanges(); // triggers ngOnInit
    
    const titleInput = debugElement.query(By.css('#form-title')).nativeElement;
    titleInput.value = '';
    titleInput.dispatchEvent(new Event('input'));
    titleInput.dispatchEvent(new Event('blur'));

    fixture.detectChanges();

    const errorMessage = debugElement.query(By.css('span'));
  
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.nativeElement.textContent).toContain('Field in error');
  });

  it('should disable submit button when form is invalid', () => {
    component.init = {id: 1, title: '', description: 'Description ...'};
    
    fixture.detectChanges(); // triggers ngOnInit
    
    const submitButton = debugElement.query(By.css('button')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should emit submited event with form values on submit', () => {
    component.init = {id: 1, title: 'Title', description: 'Description ...'};
    
    fixture.detectChanges(); // triggers ngOnInit
    
    const emitSpy = jest.spyOn(component.submited, 'emit');

    component.form.get('title')?.setValue('New title');
    component.form.get('description')?.setValue('New description');

    const submitButton = debugElement.query(By.css('button')).nativeElement;
    submitButton.click();

    expect(emitSpy).toHaveBeenCalledWith({
      id: 1,
      title: 'New title',
      description: 'New description'
    });

  });


});
