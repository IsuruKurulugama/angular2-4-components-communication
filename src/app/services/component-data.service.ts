import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject<string>("");
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    setNewMessage(message: string) {
        this.messageSource.next(message)
    }

}