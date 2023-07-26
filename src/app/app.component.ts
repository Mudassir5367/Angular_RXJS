import { Component } from '@angular/core';
import { interval, Observable, of, Subscriber, take } from 'rxjs';
import { ContacsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

item:any;
user:any;
listUsers$:any;

  title = 'first-RxJS';

  constructor(private contacsService: ContacsService) {}
  
  // Observable Example 1
  
  ngOnInit(): void{
   
this.item = ['Ali','Hamza', 'Noman']
this.user = of(this.item)
console.log('user: ', this.user);

// Example 3
this.contacsService.getData().subscribe(data=>{
  this.listUsers$ = data;
},error=>{
  console.log("Errorrr",error);
  
})
  }
}

// Observable Example 2

let observer = new Observable(
  function subscribe(subscriber){
    const numbers = interval(1000);
 
    const takeFourNumbers$:any = numbers.pipe(take(2));
   
     
    takeFourNumbers$.subscribe((x:any) =>  subscriber.next('My first Observable'));
    takeFourNumbers$.subscribe((x:any) =>  subscriber.next('Testing Observable'));
    // takeFourNumbers$.subscribe((x:any) =>  subscriber.complete());
    try{
      setTimeout(()=>{
      // subscriber.next('My first Observable').pipe(interval(1000))
    } ,2000);
    setTimeout(()=>{
      //subscriber.next('Testig Observable')
    } ,3000);
    setTimeout(()=>{
      //subscriber.complete()
    } ,4000);
      }
      catch(e){
        subscriber.error(e)
      }


 
}
);
observer.subscribe(x => console.log(x), (e) => console.log(e),
()=>console.log('Observable is complete'));


let observer1 = new Observable(function subscribe(subscriber) {
  subscriber.next('My first observable 12131')
});
observer1.subscribe((x)=>{
  console.log('Observable is : ', x);

})