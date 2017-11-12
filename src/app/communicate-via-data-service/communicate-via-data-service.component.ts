import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/component-data.service";

@Component({
  selector: 'app-communicate-via-data-service',
  templateUrl: './communicate-via-data-service.component.html',
  styleUrls: ['./communicate-via-data-service.component.css']
})
export class CommunicateViaDataServiceComponent implements OnInit {

  message: string = "";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
