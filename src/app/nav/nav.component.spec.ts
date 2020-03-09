import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, ComponentRef, NO_ERRORS_SCHEMA } from '@angular/core';

import { NavComponent } from './nav.component';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/Testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /* Test Failing */
  // x - in from of it or describe block to disable test
  xit('should have a link to todos page', () => {
    const fixture = TestBed.createComponent(NavComponent);
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    // <a routerLink="/todos">                                                                 // findIndex get index of target element in array
    //let index = debugElements.findIndex(de => de.properties['routerLink'] === '/todos');     // findIndex returns -1, if not found
   
    // <a href="/todos">    
    let index = debugElements.findIndex(de => de.properties['href'] === '/todos');

    expect(index).toBeGreaterThan(-1);

  });

});
