import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from 'src/app/shared/master-layout/master-layout.component';
import { Dashboard2Component } from './dashboard2.component';

const routes: Routes = [
  { 
    path: '',
    component: MasterLayoutComponent,
    children : [
      {
        path: '', 
        component: Dashboard2Component 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dashboard2RoutingModule { }
