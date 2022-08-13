import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SopformbuilderRoutingModule } from './sopformbuilder-routing.module';
import { SopformbuilderComponent } from './sopformbuilder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { FormEntityComponent } from './form-entity/form-entity.component';
import { InputTypeControlComponent } from './input-type-control/input-type-control.component';
import { CheckboxInputComponent } from './controls/checkbox-input/checkbox-input.component';
import { DateInputComponent } from './controls/date-input/date-input.component';
import { EmailInputComponent } from './controls/email-input/email-input.component';
import { NumberInputComponent } from './controls/number-input/number-input.component';
import { SelectInputComponent } from './controls/select-input/select-input.component';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { TextareaInputComponent } from './controls/textarea-input/textarea-input.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    SopformbuilderComponent,
    FormEntityComponent,
    InputTypeControlComponent,
    SelectInputComponent,
    TextInputComponent,
    CheckboxInputComponent,
    DateInputComponent,
    EmailInputComponent,
    NumberInputComponent,
    TextareaInputComponent,
    DynamicFormComponent
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
