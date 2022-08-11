import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-type-control',
  templateUrl: './input-type-control.component.html',
  styleUrls: ['./input-type-control.component.css']
})
export class InputTypeControlComponent implements OnInit {

  @Input() control!: any;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log(this.control);
  }

}
