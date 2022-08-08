import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { ColorPickerModule } from 'ngx-color-picker';

//import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [MasterLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    //ConfirmDialogComponent,
    //RemovecommaPipe     
 ],
})
export class SharedModule { }
