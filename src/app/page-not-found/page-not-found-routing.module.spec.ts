import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        PageNotFoundRoutingModule,
        HttpClientModule
    ]
})
class TestModule{}


describe('PageNotFoundRoutingModule', () => {
  
    let location: Location;
    let router: Router;
    let fixture: any;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
        imports: [
           RouterTestingModule.withRoutes([]),
            TestModule
        ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(PageNotFoundComponent);
    router.initialNavigation();
  });

  it('should navigate to "" and render PageNotFoundComponent', fakeAsync(() => {
    router.navigate(['']).then(()=>{
        tick();
        expect(location.path()).toBe('/');
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeInstanceOf(PageNotFoundComponent);
    });

  }));

});
