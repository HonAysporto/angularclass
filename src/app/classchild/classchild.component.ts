import { Component } from '@angular/core';
import { BehavioursubjectService } from '../services/behavioursubject.service';

interface User {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phonenumber:string;
}

@Component({
  selector: 'app-classchild',
  standalone: true,
  imports: [],
  templateUrl: './classchild.component.html',
  styleUrl: './classchild.component.css'
})
export class ClasschildComponent {

  public classdata:any = {}

constructor(public behavioursub : BehavioursubjectService) {}
ngOnInit() {
  // console.log(this.behavioursub.classwork.value);
  this.behavioursub.classwork.subscribe(res=> {
    console.log(res);
    this.classdata = res
    
  })
  
}


}
