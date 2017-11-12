import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-of-parent-to-child-via-input',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildOfParentToChildViaInputComponent implements OnInit {

  @Input() messageFromParent: string;
  
  constructor() { }

  ngOnInit() {
  }

}
