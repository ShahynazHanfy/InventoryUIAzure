import { Component, OnInit } from '@angular/core';
import { from, defer } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  getWelcomePromise() {

    return new Promise(resolve => {
      console.log("In Promise executor fn");

      resolve("Welcome hukjk!");
    });
  }
  ngOnInit(): void {

    // const wrappedPromise1$ = from(this.getWelcomePromise());

    // console.log("Before calling the subscribe method");

    // wrappedPromise1$.subscribe(console.log);

    const wrappedPromise2$ = defer(() => this.getWelcomePromise());

    console.log("Before calling the subscribe method");

     wrappedPromise2$.subscribe(console.log);
     console.log("Before calling the subscribe method");

  }
  title = 'Inventory';


}
