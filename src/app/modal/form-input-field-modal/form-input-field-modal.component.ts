import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SopformbuilderService } from 'src/app/core/service/sopformbuilder/sopformbuilder.service';

@Component({
  selector: 'app-form-input-field-modal',
  templateUrl: './form-input-field-modal.component.html',
  styleUrls: ['./form-input-field-modal.component.css']
})
export class FormInputFieldModalComponent implements OnInit {

  inputType :any[] = [
    {name:'textinput',value:'textinput'},
    {name:'numberinput',value:'numberinput'},
    {name:'emailinput',value:'emailinput'},
    {name:'textarea',value:'textarea'},
    {name:'dateinput',value:'dateinput'},
    {name:'checkboxinput',value:'checkboxinput'},
    {name:'dropdown',value:'dropdown'}
  ]

  selectedInputType : string = "" ;
  options : any[] = [
    { key: "user input", value: "user_input" },
    { key: "system data", value: "system_data" }
  ]

  createInputForm !: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormInputFieldModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder,
    private SopformbuilderService : SopformbuilderService
  ) { }

  ngOnInit(): void {
    this.createInputForm = this.fb.group({
      label : ['',Validators.required],
      controlType : ['',Validators.required],
      order : ['',Validators.required],
      required : ['',Validators.required]
    })
    console.log(this.selectedInputType);
  }

  submit(){
    let formResponce = {
      label : this.createInputForm.controls['label'].value,
      controlType : this.createInputForm.controls['controlType'].value,
      key: this.createInputForm.controls['label'].value,
      data:"",
      required : this.createInputForm.controls['required'].value,
      order : this.createInputForm.controls['order'].value
    }
    console.log(formResponce);
    this.SopformbuilderService.insertField(formResponce);
    this.dialogRef.close({ event: 'success'});
  }
  changeSelectData(event:any){
    this.selectedInputType = event.value;
    console.log(this.selectedInputType);
  }

}
