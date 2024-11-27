import { Component } from '@angular/core';
import { ChildbehavioursubjectComponent } from '../childbehavioursubject/childbehavioursubject.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BehavioursubjectService } from '../services/behavioursubject.service';

@Component({
  selector: 'app-parentbehavioursubject',
  standalone: true,
  imports: [ChildbehavioursubjectComponent, FormsModule, CommonModule],
  templateUrl: './parentbehavioursubject.component.html',
  styleUrl: './parentbehavioursubject.component.css'
})
export class ParentbehavioursubjectComponent {

  public msg =''
  constructor(public behaviorsub:BehavioursubjectService) {}


  upb () {
    console.log(this.msg);
    this.behaviorsub.behavior.next(this.msg)
    
  }
}
