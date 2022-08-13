import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SopformbuilderService {

  
  formFieldData :any[] = [];

  form !: FormGroup;

  constructor(private http : HttpClient) { }

  public refresh = new BehaviorSubject(false);


  httpOptions = {
    headers : new HttpHeaders({ 'content-type': 'application/json','Access-Control-Allow-Origin': '*'})
  }



  getFormFieldInfo(){
    return this.http.get('http://localhost:3000/formFieldData');
  }

  
  insertField(obj:any){
    return this.http.post('http://localhost:3000/formFieldData', obj,this.httpOptions)
  }

  deleteFormField(id:number){
    return this.http.delete(`http://localhost:3000/formFieldData/${id}`,this.httpOptions)
  }

  toFormGroup(controls:any[]){
    const group : any = {};
    controls.forEach((control)=>{
      group[control.key] = control.required ? new FormControl(control.data || "" ,Validators.required) 
      : new FormControl(control.data || "");
      
    })
    console.log(group);
    return new FormGroup(group);
  }
}
