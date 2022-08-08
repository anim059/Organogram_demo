import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-entity',
  templateUrl: './form-entity.component.html',
  styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent implements OnInit {

  @Input() nodeId !: number;

  /// User address info present or not ///
  formFieldData : boolean =  false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
