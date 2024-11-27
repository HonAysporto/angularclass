
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

    formone:FormGroup;

    constructor(public builder: FormBuilder) {
      this.formone = this.builder.group({
        fname:['', [Validators.minLength(5),Validators.required]],
        pnumber:['', [Validators.maxLength(10),Validators.required]],
        email:['', Validators.required],
        age:['', Validators.min(18)],
        check:false
      })
    }

    public msg = 'Pls check the box'




  reactive() {
    console.log(this.formone.value);
    console.log(this.formone.value['check']);
    
    
  }
}
