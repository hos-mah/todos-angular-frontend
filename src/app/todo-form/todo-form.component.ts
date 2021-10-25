import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(value: {title: string, compeleted: boolean }): void {
    for(const key in this.validateForm.controls){
      if(this.validateForm.controls.hasOwnProperty(key)){
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    value.compeleted = false;
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]]
    })
  }

}
