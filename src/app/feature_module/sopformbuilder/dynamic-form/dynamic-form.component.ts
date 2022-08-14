import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SopformbuilderService } from 'src/app/core/service/sopformbuilder/sopformbuilder.service';
import { FormInputFieldModalComponent } from 'src/app/modal/form-input-field-modal/form-input-field-modal.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges {

  @Input() controls: any;

  formFieldData : boolean =  false;
  buttonDisabled: boolean = true;
  editformFieldData : boolean = false;
  form !: FormGroup;



  constructor(private sopformbuilderService : SopformbuilderService,
    public dialog: MatDialog) { }
  

  
  ngOnChanges(change:SimpleChanges):void{
      console.log(change);
      console.log(this.controls);
      if(this.controls === undefined || this.controls.length === 0){
        this.formFieldData = false;
        this.buttonDisabled = true;
      }else{
        this.form = this.sopformbuilderService.toFormGroup(this.controls);
        this.formFieldData = true;
        this.buttonDisabled = false;
      }
      
    
  }

  trackByFn(index:any, control:any) {
    return control.id;
  }


  enableEditForm(){
    if(this.controls.length === 0){
      this.formFieldData = false;
      this.buttonDisabled = true;
      this.editformFieldData = false;
      return;
    }
    this.editformFieldData = this.editformFieldData ? false : true; 

  }

  createFormField(){
    this.formFieldData = true;
    this.buttonDisabled = false;
  }

  delete(obj:any){
    this.sopformbuilderService.deleteFormField(obj.id).subscribe({
      next:(res:any)=>{
        this.sopformbuilderService.refresh.next(true);
      }
    });
  }

  submit(){
    const responce : any = {};
    for(var key in this.form.controls){
      responce[key] = this.form.controls[key].value;
    }
    console.log(responce);
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormInputFieldModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result.event === 'success'){
       // console.log(`Dialog result: ${result}`);
      }
    });
  }

}
