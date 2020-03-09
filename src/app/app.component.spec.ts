/* tslint:disable:no-unused-variable */
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement, ComponentRef, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/Testing';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'unit-testing-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('unit-testing-demo');
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('unit-testing-demo app is running!');
  });


  it('should have a router outlet', () => {
    // get a reference to the native element
    const fixture = TestBed.createComponent(AppComponent);
    let de = fixture.debugElement.query(By.directive(RouterOutlet));        // de - debugElement 
    
    // Assert
    expect(de).not.toBeNull();

  });

});
