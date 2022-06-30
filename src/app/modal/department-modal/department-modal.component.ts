import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepNode } from 'src/app/core/model/Organogram-System/OgDepNode';
import { OrganogramService } from 'src/app/core/service/organogram/organogram.service';

@Component({
  selector: 'app-department-modal',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.css']
})
export class DepartmentModalComponent implements OnInit {
  local_data !: any;
  action !: string;
  departmentForm!: FormGroup;
  showDialoge : boolean = false;
  fullTree : DepNode[] = [];

  constructor( public dialogRef: MatDialogRef<DepartmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DepNode,
    private organogramService : OrganogramService,
    private fb: FormBuilder) {
      this.local_data = data;
      this.action = this.local_data.action;
      this.fullTree = this.local_data.datasource;
      console.log(this.fullTree);
      dialogRef.disableClose = true;
     }

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      departmentname: ['', [Validators.required]],
    });
    if(this.local_data.node && this.local_data.node.name != 'root' && this.local_data.action === 'update'){
      this.departmentForm.controls['departmentname'].setValue(this.local_data.node.name);
      console.log(this.local_data.node.name);
    }
    if(this.local_data.node.name === 'root' && (this.local_data.action === 'update' || this.local_data.action === 'remove')){
      this.showDialoge = true;
    }
    
  }

  onSubmit(){
    let subDepartment = this.departmentForm.value.departmentname;
    let childNode = {
      id:this.local_data.node.children.length+1,
      name : subDepartment,
      children:[],
      hasparent:true,
      parentDep:this.local_data.node.name
    }
    this.insertNodeToTree(this.fullTree,childNode,this.local_data.node);
    console.log(this.fullTree);
    this.dialogRef.close({ event: 'success'});
  }

  insertNodeToTree(fullTree:DepNode[],childnode:DepNode,currnode:DepNode){

    if(fullTree[0].name === currnode.name){
      fullTree[0].children?.push(childnode);
      return;
    }
    if(fullTree.length == 0 && fullTree[0].children?.length === 0){
      return;
    }
    for(var val in fullTree[0].children){
      let nextNode = fullTree[0].children[Number(val)]
      this.insertNodeToTree([nextNode],childnode,currnode);
    }
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}


