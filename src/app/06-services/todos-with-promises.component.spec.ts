import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TodosWithPromisesComponent } from './todos-with-promises.component'; 
import { TodoService } from './todo.service'; 

import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
//import { from } from 'rxjs/Observable/from';


describe('TodosWithPromisesComponent', () => {
  let component: TodosWithPromisesComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);      // TodoService is expecting a HTTPClient, passing null instead.
    component = new TodosWithPromisesComponent(service);
  });

  it('should set todos property with items returnd from the server', async (() => {

    const fixture = TestBed.createComponent(TodosWithPromisesComponent);
    
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3])); 

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    });

    /* Jasmine spyOn() Function
       1.  determin if method has been called;
       2.  change the implementation of method;
       3.  return a different value 
       4.  or throw an error
       *   spyOn() - get controll of a class's methods
    */

  }));

   // Using fakeAsync & tic
  it('should set todos property with items returnd from the server', fakeAsync (() => {

    const fixture = TestBed.createComponent(TodosWithPromisesComponent);
    
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3])); 

    fixture.detectChanges();
    
    tick();           // simulates the passage of time.
    expect(component.todos.length).toBe(3);

  }));


});