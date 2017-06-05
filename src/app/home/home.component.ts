import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Subscription } from "rxjs/Subscription";
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObserver: Subscription;
  myObservRif: Subscription;

  constructor() { }

  ngOnInit() {

    const myNumbers = Observable.interval(1000);

   this.numberObserver = myNumbers.subscribe(
      (n: number) => {
        console.log(n);
      }
    )


    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('primo pachetto')
        }, 1500); 

        setTimeout(() => {
          observer.next('secondo pachetto')
        }, 4000); 

        setTimeout(() => {
          // observer.error('Error message')
          observer.complete();
        }, 5000); 

        setTimeout(() => {
          observer.next('terzo pachetto')
        }, 
        6000); 
      }
    )


   this.myObservRif =  myObservable.subscribe(
      (d: string) => { console.log(d) },
      (msg: string) => { console.log(msg)},
      () => {console.log('Completed')}
    )
  }

  ngOnDestroy(){
    this.numberObserver.unsubscribe();
    this.myObservRif.unsubscribe();
  }

}
