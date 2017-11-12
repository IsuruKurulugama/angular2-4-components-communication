import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentToChildViaInputComponent } from './parent-to-child-via-input/parent-to-child-via-input.component';
import { ChildToParentViaOutputEmitterComponent } from './child-to-parent-via-output-emitter/child-to-parent-via-output-emitter.component';
import { ChildToParentViaViewChildComponent } from './child-to-parent-via-view-child/child-to-parent-via-view-child.component';
import { CommunicateViaDataServiceComponent } from './communicate-via-data-service/communicate-via-data-service.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { ChildOfParentToChildViaInputComponent } from './parent-to-child-via-input/child/child.component';
import { ChildToParentViaOutputEmitterChild1Component } from './child-to-parent-via-output-emitter/child1/child1.component';
import { ChildToParentViaOutputEmitterChild2Component } from './child-to-parent-via-output-emitter/child2/child2.component';
import { ChildToParentViaViewChildComponentChildComponent } from './child-to-parent-via-view-child/child/child.component';

import { DataService } from "app/services/component-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildViaInputComponent,
    ChildToParentViaOutputEmitterComponent,
    ChildToParentViaViewChildComponent,
    CommunicateViaDataServiceComponent,
    HomeComponent,
    ChildOfParentToChildViaInputComponent,
    ChildToParentViaOutputEmitterChild1Component,
    ChildToParentViaOutputEmitterChild2Component,
    ChildToParentViaViewChildComponentChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
