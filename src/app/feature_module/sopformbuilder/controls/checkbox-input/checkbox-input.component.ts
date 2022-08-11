import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit {

  @Input() meta!: any;
  @Input() form!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
