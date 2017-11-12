import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-of-child-to-parent-via-view-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildToParentViaViewChildComponentChildComponent implements OnInit {

  message: string = "I am your child"

  constructor() { }

  ngOnInit() {
  }

}
