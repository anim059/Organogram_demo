import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {


  form = this.fb.group({
    // ... other form controls ...
    lessons: this.fb.array([])
  });

constructor(private fb:FormBuilder) {}


ngOnInit(): void {
    
}

get lessons() {
  return this.form.controls["lessons"] as FormArray;
}

addLesson() {
  const lessonForm = this.fb.group({
    title: ['', Validators.required],
    level: ['beginner', Validators.required]
  });
  this.lessons.push(lessonForm);
}

deleteLesson(lessonIndex: number) {
  this.lessons.removeAt(lessonIndex);
}

}

