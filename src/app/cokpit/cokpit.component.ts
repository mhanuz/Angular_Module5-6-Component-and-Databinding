import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  // EventEmitter is geceric type
  // when an event can occur many times there we can use event emitter
  // @Output: we are passing something out of the component, allow parent component to use this component 
  @Output()serverCreated = new EventEmitter<{NormalServer: string; serverContent: string;}>();
  @Output('bpCreated')bluePrintCreated = new EventEmitter<{bluePrintName: string; bluePrintContent: string;}>();
  
  // newServerName = '';
  // newServerContent = '';

 @ViewChild('serverContentInput') serverContentInput: ElementRef;
 @ViewChild('serverNameInput')serverNameInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

      onAddServer(nameInput: HTMLInputElement) {
        
        this.serverCreated.emit({
          NormalServer: nameInput.value,
          serverContent: this.serverContentInput.nativeElement.value
      })
    
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      bluePrintName: this.serverNameInput.nativeElement.value,
      bluePrintContent: nameInput.value
    })
  }
}