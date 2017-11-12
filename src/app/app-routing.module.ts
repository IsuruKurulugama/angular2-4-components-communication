import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ParentToChildViaInputComponent } from './parent-to-child-via-input/parent-to-child-via-input.component';
import { ChildToParentViaOutputEmitterComponent } from './child-to-parent-via-output-emitter/child-to-parent-via-output-emitter.component';
import { ChildToParentViaViewChildComponent } from './child-to-parent-via-view-child/child-to-parent-via-view-child.component';
import { CommunicateViaDataServiceComponent } from './communicate-via-data-service/communicate-via-data-service.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'parent-to-child-via-input', component: ParentToChildViaInputComponent },
  { path: 'child-to-parent-via-output-emitter', component: ChildToParentViaOutputEmitterComponent },
  { path: 'child-to-parent-via-view-child', component: ChildToParentViaViewChildComponent },
  { path: 'communicate-via-data-service', component: CommunicateViaDataServiceComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {

}
