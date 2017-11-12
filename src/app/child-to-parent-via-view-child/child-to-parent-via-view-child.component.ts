import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { ChildToParentViaViewChildComponentChildComponent } from "app/child-to-parent-via-view-child/child/child.component";

@Component({
  selector: 'app-child-to-parent-via-view-child',
  templateUrl: './child-to-parent-via-view-child.component.html',
  styleUrls: ['./child-to-parent-via-view-child.component.css']
})
export class ChildToParentViaViewChildComponent implements OnInit {

  @ViewChild(ChildToParentViaViewChildComponentChildComponent) child;

  messageFromChild: string = "No messages";

  constructor() { }

  ngOnInit() {
    this.messageFromChild = this.child.message
  }

}
