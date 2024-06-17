import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../core/models/ticket';
import { TicketI } from '../../../core/interfaces/ticket-i';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrl: './form-ticket.component.css'
})
export class FormTicketComponent implements OnInit {


  @Input() init!: TicketI;

  public form!: FormGroup;

  @Output() submited: EventEmitter<TicketI> = new EventEmitter();


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.form = this.fb.group({
        id: [this.init.id],
        title: [this.init.title, Validators.required],
        description: [this.init.description]
      });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }

}
