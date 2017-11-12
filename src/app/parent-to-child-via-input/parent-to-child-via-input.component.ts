import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-via-input',
  templateUrl: './parent-to-child-via-input.component.html',
  styleUrls: ['./parent-to-child-via-input.component.css']
})
export class ParentToChildViaInputComponent implements OnInit {

  parentMessage = "I am your parent"
  
  constructor() { }

  ngOnInit() {
  }

}
