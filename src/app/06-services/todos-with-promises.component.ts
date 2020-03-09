
import { TodoService } from './todo.service'

export class TodosWithPromisesComponent { 
  todos: any[] = [];
  message; 

  constructor(private service: TodoService) {}

  ngOnInit() { 

    setTimeout(() => {
      this.service.getTodosPromise().then(t => this.todos = t);   // not executed immediately; wrap in setTimeout for anync
    })

  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
