import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { Router } from '@angular/router';


import { CommonModule, Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { TicketsModule } from './tickets/tickets.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PageListTicketsComponent } from './tickets/pages/page-list-tickets/page-list-tickets.component';
import { PageAddTicketComponent } from './tickets/pages/page-add-ticket/page-add-ticket.component';
import { PageEditTicketComponent } from './tickets/pages/page-edit-ticket/page-edit-ticket.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
   
    imports: [
        CommonModule,
        TicketsModule,
        PageNotFoundModule
    ]
})
class TestModule{}


describe('AppRoutingModule', () => {
  
    let location: Location;
    let router: Router;
    let fixture: any;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([]),
            HttpClientModule,
            AppRoutingModule,
            TestModule
        ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(PageListTicketsComponent);
    router.initialNavigation();
  });

  it('should navigate to "" redirects to /tickets', fakeAsync(()=>{
    router.navigate(['']).then(()=>{
        tick();
        expect(location.path()).toBe('/tickets');
    });
  }));

  it('should navigate to "tickets" renders TicketsModule', fakeAsync(()=>{
    router.navigate(['/tickets']).then(()=>{
        tick();
        expect(location.path()).toBe('/tickets');
    });
  }));

  it('should navigate to "**" renders PageNotFoundModule', fakeAsync(()=>{
    router.navigate(['/unknown-page']).then(()=>{
        tick();
        expect(location.path()).toBe('/unknown-page');
    });
  }));


});
