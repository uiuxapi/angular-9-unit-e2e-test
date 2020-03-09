/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, ComponentRef } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';


class RouterStub {
  navigate(params) {}
}

class ActivatedRouteStub {
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {                                // using get to define a public property
    return this.subject.asObservable();         // exposes property as obserbable to outside world.
  }

  // params: Observable<any> = Observable.empty();
}

xdescribe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [ 
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance of the UserDetailsComponent', () => {
    // test component creation
    expect(component).toBeTruthy();
  });

  
  it('should redirect the user to the users page after saving', () => {
    // test interaction of component with the router

    // Arrange
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');      // spy to assert that navigate method has been called

    // Act
    component.save();     /* check test is working by, commenting out this line,  should cause test to fail */
    
    // Assert
    expect(spy).toHaveBeenCalledWith(['user']);

  });


  it('should navigate the user to the not-found page when an invalid userid is passed', () => {
    // test interaction of component with the router

    // Arrange
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');        // spy to assert that navigate method has been called.
   
    // Act
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });          // invalid userid enterded

    // Assert
    expect(spy).toHaveBeenCalledWith(['not-found']);

  });
});
