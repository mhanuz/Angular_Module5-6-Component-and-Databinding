import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
// ViewEncapsulation:  Don't affect other elements in the application
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // style main HTML of this component.
  // None: get rid from shadow dom
})
export class ServerElementComponent implements OnInit {
  // bydefault all properties are accessible component itself, not other components
  // using input decorators, it tells the angular allow access properties from Parent component
  @Input('servElementToSE') element : { // servElementToSE: property binding alias
    name: string;
    type: string;
    content: string;
  }
// @Input: make your property bindable from outside
// ServerElementComponent using property from AppComponent
  constructor() { }

  ngOnInit(): void {
  }

}
