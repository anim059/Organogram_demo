import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserOrganogramService } from 'src/app/core/service/user-organogram/user-organogram.service';

@Component({
  selector: 'app-user-node-modal',
  templateUrl: './user-node-modal.component.html',
  styleUrls: ['./user-node-modal.component.css']
})
export class UserNodeModalComponent implements OnInit {

  local_data !: any;
  childNodeForm !: FormGroup;
  designationList :any[] = [];
  designationName :any[] = [
    {
      id:1,
      designation : 'Sr.Engr',
      pId:""
    },
    {
      id:2,
      designation : 'Jr.Engr',
      pId:1
    },
    {
      id:3,
      designation : 'Mid.Engr',
      pId:1
    },
    {
      id:4,
      designation : 'Intern',
      pId:3
    },
  ]
  constructor(
    public dialogRef: MatDialogRef<UserNodeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private UserOrganogramService : UserOrganogramService,
    private fb: FormBuilder
  ) {
    this.local_data = data.node;
    dialogRef.disableClose = true;
   }

  ngOnInit(): void {
    this.childNodeForm = this.fb.group({
      designationName : ['',[Validators.required]]
    })

   
    for(var val of this.designationName){
       if(this.local_data.root && this.local_data.root === 'root' && val.pId === ""){
        this.designationList.push(val.designation);
       }else if(this.local_data.node.label === val.designation){
         this.getDesignationList(val.id);
         break
       }
    }
   
    console.log(this.local_data);
  }

  getDesignationList(id:number){
    for(var val of this.designationName){
      if(val.pId === id){
        this.designationList.push(val.designation);
      }
    }
  }

  onSubmit(){
    
    let childNodeInfo = {
      parentId : this.local_data.node.id,
      parentName : this.local_data.node.label,
      childNode : this.childNodeForm.value.designationName
    }
    this.UserOrganogramService.insertNodeToParent(childNodeInfo,this.local_data.node.data.departmentName);
    this.dialogRef.close({event:'success'});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
