import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrganogramService } from 'src/app/core/service/organogram/organogram.service';

@Component({
  selector: 'app-node-modal',
  templateUrl: './node-modal.component.html',
  styleUrls: ['./node-modal.component.css']
})
export class NodeModalComponent implements OnInit {

  local_data !: any;
  childNodeForm !: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<NodeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private organogramService : OrganogramService,
    private fb: FormBuilder
  ) {
    this.local_data = data.node;
    dialogRef.disableClose = true;
   }

  ngOnInit(): void {
    this.childNodeForm = this.fb.group({
      childNodeName : ['',[Validators.required]]
    })

    console.log(this.local_data.node.data.departmentName);
  }

  onSubmit(){
    let childNodeInfo = {
      parentId : this.local_data.node.id,
      parentName : this.local_data.node.label,
      childNode : this.childNodeForm.value.childNodeName
    }
    this.organogramService.insertNodeToParent(childNodeInfo,this.local_data.node.data.departmentName);
    this.dialogRef.close({event:'success'});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
