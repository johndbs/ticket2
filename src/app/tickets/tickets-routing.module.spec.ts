import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsRoutingModule } from './tickets-routing.module';
import { PageListTicketsComponent } from './pages/page-list-tickets/page-list-tickets.component';
import { PageAddTicketComponent } from './pages/page-add-ticket/page-add-ticket.component';
import { PageEditTicketComponent } from './pages/page-edit-ticket/page-edit-ticket.component';
import { BrowserModule } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BtnComponent } from '../shared/components/btn/btn.component';


@NgModule({
    declarations: [
        PageListTicketsComponent,
        PageAddTicketComponent,
        PageEditTicketComponent,
        BtnComponent
    ],
    imports: [
        BrowserModule,
        TicketsRoutingModule,
        HttpClientModule
    ]
})
class TestModule{}


describe('TicketsRoutingModule', () => {
  
    let location: Location;
    let router: Router;
    let fixture: any;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([]),
            TestModule
        ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(PageListTicketsComponent);
    router.initialNavigation();
  });

  it('should navigate to "" redirects to /', fakeAsync(() => {
    router.navigate(['']).then(()=>{
        tick();
        expect(location.path()).toBe('/');
    });

  }));

  it('should navigate to "add" renders PageAddTicketComponent', fakeAsync(()=>{
    router.navigate(['/add']).then(()=>{
        tick();
        expect(location.path()).toBe('/add');
    });
    
  }));

  it('should navigate to "edit/:id" renders PageEditTicketComponent', fakeAsync(()=>{
    router.navigate(['/edit/1']).then(()=>{
        tick();
        expect(location.path()).toBe('/edit/1');
    })
  }));


});
