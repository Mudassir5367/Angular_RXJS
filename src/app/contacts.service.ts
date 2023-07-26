import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContacsService {

  constructor(private http:HttpClient) { }
ngOnInit(){
  
}
  getData(): Observable<object>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}

const subject_test = new Subject();

subject_test.subscribe({
   next: (v) => console.log(`From Subject : ${v}`)
});
subject_test.subscribe({
   next: (v) => console.log(`From Subject: ${v}`)
});
subject_test.next("A");
subject_test.next("B");
subject_test.complete()
subject_test.next('C')
