import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 

import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
//import { from } from 'rxjs/Observable/from';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);      // TodoService is expecting a HTTPClient, passing null instead.
    component = new TodosComponent(service);
  });

  it('should set todos property with items returnd from the server', () => {
    
    spyOn(service, 'getTodos').and.callFake(() => {

      let todos = [{id:1, title:'a'},{id:2, title:'b'},{id:3, title:'c'}];
      return Observable.from([ todos ]);
      component.ngOnInit();

      expect(component.todos.length).toBeGreaterThan(0);
      expect(component.todos.length).toBe(3);
      expect(component.todos).toBe(todos);

    }); 

    /* Jasmine spyOn() Function
       1.  determin if method has been called;
       2.  change the implementation of method;
       3.  return a different value 
       4.  or throw an error
       *   spyOn() - get controll of a class's methods
    */

  });

  it('[Test 1] should call the server to save the changes when a new todo item is added', () => {
    // make sure service.add() is called
    let spy =  spyOn(service, 'add').and.callFake(t => {
      // should return and Observable
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();           // Test if a given method has been called.
  });

 
  it('[Test 2] should add the new todo returned from the server', () => {
    let todo = [{id: 1}];
    // make sure service.add() is called
    let spy =  spyOn(service, 'add').and.callFake(t => {
      // should return and Observable
      return Observable.from([ todo ]);
    });

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);           // Test if found in data returned from server
  });


  it('[Test 2] should add the new todo returned from the server - refactored', () => {
    let todo = [{id: 1}];
    // make sure service.add() is called
    let spy =  spyOn(service, 'add').and.returnValue(Observable.from([ todo ]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);           // Test if found in data returned from server
  });


  it('[Test 3] should set the message property if server return an error when adding a new todo', () => {
    let error = '500 Server Error!'
    let spy =  spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add()
    expect(component.message).toBe(error);
  });


  // Testing service.delete() FN if user succesfully confirms
  it('should call the server to delete a todo item  if the user confirms', () => {
    // arrange
    spyOn(window, 'confirm').and.returnValue(true);                 // spying on widow.confirm()
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    // act
    component.delete(1);
    
    // assert
    expect(spy).toHaveBeenCalledWith(1); 
  });

   
 // Testing service.delete() FN if user cancels confirm
 it('should NOT call the server to delete a todo item  if the user cancels', () => {
  // arrange
  spyOn(window, 'confirm').and.returnValue(false);                 // spying on widow.confirm()
  let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

  // act
  component.delete(1);
  
  // assert
  expect(spy).not.toHaveBeenCalledWith(); 
});


});