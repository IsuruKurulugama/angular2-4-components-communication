import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-via-output-emitter',
  templateUrl: './child-to-parent-via-output-emitter.component.html',
  styleUrls: ['./child-to-parent-via-output-emitter.component.css']
})
export class ChildToParentViaOutputEmitterComponent implements OnInit {

  messageFromChild: string = "No messages"
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.messageFromChild = $event
  }

}
