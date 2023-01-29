import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // shadow dom injection
  // None: get rid from shadow dom
})
export class ServerElementComponent implements OnInit {
  // bydefault all properties are accessible component itself, not other components
  // using decorators, it tells the component allow acces properties from Parent component
  @Input('servElementToSE') element : { // servElement: property binding alias
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
