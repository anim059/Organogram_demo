import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from 'src/app/shared/master-layout/master-layout.component';
import { SopformbuilderComponent } from './sopformbuilder.component';

const routes: Routes = [
  { 
    path: '', 
    component: MasterLayoutComponent,
    children : [
      {
        path: ':id',
        component : SopformbuilderComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SopformbuilderRoutingModule { }
