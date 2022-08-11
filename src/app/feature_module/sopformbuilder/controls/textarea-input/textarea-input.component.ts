import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.css']
})
export class TextareaInputComponent implements OnInit {

  @Input() meta!: any;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
