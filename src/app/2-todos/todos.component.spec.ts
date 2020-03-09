/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports: [ HttpClientModule ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should load todos from the server', () => {
   
    // get reference to the service dependency registerd at module level
    let service = TestBed.get(TodosComponent);
    spyOn(service, 'getTodos').and.returnValue(Observable.from([ [1, 2, 3] ]));
    fixture.detectChanges();
    
    expect(component.todos.length).toBe(3);
  
    // get reference to the service deppendecy registerd at the TestBed level
    // get a depencency from a component directly - To Verbose use TestBed.
    /* fixture.debugElement.injector.get(TodoService); */


  });

});
