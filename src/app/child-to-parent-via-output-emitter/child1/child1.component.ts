import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-via-output-emitter-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class ChildToParentViaOutputEmitterChild1Component implements OnInit {

  message: string = "I am child 1"
  messageFromChild2: string = "No messages"
  @Output() child1MessageToParent = new EventEmitter<string>();
  @Output() child1MessageToChild2 = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  //Send message to parent
  sendMessageToParent() {
    this.child1MessageToParent.emit(this.message)
  }

  //Send message to child 2
  sendMessageToChild2() {
    this.child1MessageToChild2.emit(this.message)
  }

   //Recieve message from child 2
  receiveMessage($event) {
    this.messageFromChild2 = $event
  }
}
