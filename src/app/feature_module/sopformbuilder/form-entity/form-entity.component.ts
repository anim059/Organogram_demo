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
  
  constructor(private sopformbuilderService : SopformbuilderService) { 

  }

  ngOnInit(): void {
    this.getFormFieldInfo();
    this.sopformbuilderService.refresh.subscribe((res)=>{
      if(res){
        this.formdata = [];
        this.getFormFieldInfo();
      }
    })
   
  }

  getFormFieldInfo(){
    this.sopformbuilderService.getFormFieldInfo().subscribe({
      next:(res)=>{
        this.formdata = res;
      }
    })
  }

 
  

}
