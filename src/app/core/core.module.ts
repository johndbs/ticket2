import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UiModule,
    NavComponent
  ]
})
export class CoreModule { }
