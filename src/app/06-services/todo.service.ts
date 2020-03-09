
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map( r => [r] ));
  }

  getTodos() { 
    return this.http.get('...').pipe(map( r => [r] ));
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map( r => [r] )).toPromise();
  }

  delete(id) {
    return this.http.delete('...').pipe(map( r => [r] ));
  }
}