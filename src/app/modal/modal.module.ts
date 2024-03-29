import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DepartmentModalComponent } from './department-modal/department-modal.component';
import { NodeModalComponent } from './node-modal/node-modal.component';
import { UserNodeModalComponent } from './user-node-modal/user-node-modal.component';
import { FormInputFieldModalComponent } from './form-input-field-modal/form-input-field-modal.component';

@NgModule({
  declarations: [
    DepartmentModalComponent,
    NodeModalComponent,
    UserNodeModalComponent,
    FormInputFieldModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ModalModule { }
