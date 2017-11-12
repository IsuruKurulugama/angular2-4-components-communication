import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-via-output-emitter-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class ChildToParentViaOutputEmitterChild2Component implements OnInit {

  message: string = "I am child 2"
  messageFromChild1: string = "No messages"
  @Output() child2MessageToParent = new EventEmitter<string>();
  @Output() child2MessageToChild1 = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  //Send message to parent
  sendMessageToParent() {
    this.child2MessageToParent.emit(this.message)
  }

  //Send message to child 1
  sendMessageToChild1() {
    this.child2MessageToChild1.emit(this.message)
  }

  //Recieve message from child 1
  receiveMessage($event) {
    this.messageFromChild1 = $event
  }
}
