import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent implements OnInit {

  @Input() meta!: any;
  @Input() form!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
