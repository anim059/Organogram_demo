import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SopformbuilderService {

  
  formFieldData :any[] = [
    {
      label:"firstName",
      controlType: "textinput",
      key: "firstName",
      data:"",
      required: true,
      order: 2
    },
    {
      label:"lastName",
      controlType: "textinput",
      key: "lastName",
      data:"",
      required: true,
      order: 4
    },
    {
      label:"country",
      key: "country",
      data: "",
      options: [
        { key: "IN", "value": "BD" },
        { key: "USA", "value": "United States of America" },
        { key: "UK", "value": "United Kingdom" }
      ],
      order: 8,
      controlType: "dropdown"
    },
    {
      label:"Date",
      controlType: "dateinput",
      key: "Date",
      data:"",
      required: true,
      order: 4
    }
  ]
  constructor() { }

  insertField(obj:any){
    this.formFieldData.push(obj);
  }

  toFormGroup(controls:any[]){
    console.log(controls);
    const group : any = {};
    controls.forEach((control)=>{
      group[control.key] = control.required ? new FormControl(control.data || "" ,Validators.required) 
      : new FormControl(control.data || "");
    })
    return new FormGroup(group);
  }
}
