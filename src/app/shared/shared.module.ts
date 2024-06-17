import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BtnComponent,
    ReactiveFormsModule // Required for forms
  ]
})
export class SharedModule { }
