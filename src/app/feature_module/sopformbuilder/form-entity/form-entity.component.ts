import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { FormGroup } from '@angular/forms';
import { SopformbuilderService } from 'src/app/core/service/sopformbuilder/sopformbuilder.service';
import { FormInputFieldModalComponent } from 'src/app/modal/form-input-field-modal/form-input-field-modal.component';

@Component({
  selector: 'app-form-entity',
  templateUrl: './form-entity.component.html',
  styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent implements OnInit {

  @Input() nodeId !: number;

  /// User address info present or not ///
  formdata !: any;
  formFieldData : boolean =  false;
  buttonDisabled: boolean = true;
  editformFieldData : boolean = false;
  form !: FormGroup;

  constructor(private sopformbuilderService : SopformbuilderService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFormFieldInfo();
  }

  getFormFieldInfo(){
    //console.log(this.form.controls);
    this.formdata = this.sopformbuilderService.formFieldData;
    console.log(this.formdata);
    if(this.formdata.length != 0){
      console.log('pass1');
      this.form = this.sopformbuilderService.toFormGroup(this.formdata);
    }
    if(this.form){
      console.log('pass2');
      this.formFieldData = true;
      this.buttonDisabled = false;
    }
    //console.log(this.form.controls);
  }

  enableEditForm(){
    this.editformFieldData = this.editformFieldData ? false : true; 
    console.log(this.editformFieldData);
  }

  createFormField(){
    this.formFieldData = true;
    this.buttonDisabled = false;
  }

  delete(obj:any){
    console.log(obj);
  }

  submit(){
    let response = {
      firstname : this.form.controls['firstName'].value,
      lastname : this.form.controls['lastName'].value,
      country : this.form.controls['country'].value,
    }
    console.log(response);
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormInputFieldModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result.event === 'success'){
        this.getFormFieldInfo();
        console.log(`Dialog result: ${result}`);
      }
    });
  }

}
