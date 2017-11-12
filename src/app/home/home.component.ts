import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/component-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Communicate Between Components Demo App';
  passText: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.passText = message)
  }

  //set new message to data service
  setNewMessage() {
    this.dataService.setNewMessage(this.passText)
  }

}
