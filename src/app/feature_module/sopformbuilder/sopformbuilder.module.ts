import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SopformbuilderRoutingModule } from './sopformbuilder-routing.module';
import { SopformbuilderComponent } from './sopformbuilder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { FormEntityComponent } from './form-entity/form-entity.component';

@NgModule({
  declarations: [
    SopformbuilderComponent,
    FormEntityComponent
  ],
  imports: [
    CommonModule,
    SopformbuilderRoutingModule,
    SharedModule,
    DragDropModule,
    NgxGraphModule
  ]
})
export class SopformbuilderModule { }
