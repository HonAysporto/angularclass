import { Component, inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-stepperform',
  standalone: true,
  imports: [ MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule, CommonModule],
  templateUrl: './stepperform.component.html',
  styleUrl: './stepperform.component.css'
})
export class StepperformComponent {



  ngOnInit() {
    this.usersArray = JSON.parse(localStorage.getItem('bigstepperinformation')!) || []
  }

  private _formBuilder = inject(FormBuilder);
  public usersArray:any = [];

  firstFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
    ageCtrl: ['', Validators.required],
    emailCtrl: ['', Validators.required],
    genderCtrl: ['', Validators.required],
    phoneCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    addressCtrl: ['', Validators.required],
    cityCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    postalCodeCtrl: ['', Validators.required],
    countryCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    passwordCtrl: ['', Validators.required],
    confirmPasswordCtrl: ['', Validators.required],
    securityQuestionCtrl: ['', Validators.required],
    securityAnswerCtrl: ['', Validators.required],
    
  });
  isLinear = true;

  submit() {
    console.log(this.firstFormGroup.value);


    const personInfo = {
      ...this.firstFormGroup.value, 
      ...this.secondFormGroup.value, 
      ...this.thirdFormGroup.value, 
    };

    
    this.usersArray.push(personInfo);
    localStorage.setItem('bigstepperinformation', JSON.stringify(this.usersArray))
    console.log('Person Information:', personInfo);
    console.log('Users Array:', this.usersArray);
    

    
  }

  
}
