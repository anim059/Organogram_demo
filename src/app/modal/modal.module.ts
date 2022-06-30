import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DepartmentModalComponent } from './department-modal/department-modal.component';

@NgModule({
  declarations: [
    DepartmentModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ModalModule { }
