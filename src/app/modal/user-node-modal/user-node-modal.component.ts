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
  designationList :any[] = ["Sr.Engr","Jr.Engr","Mid.Engr","Intern"]
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

    console.log(this.local_data.node.data.departmentName);
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
