import { Component } from '@angular/core';
import { BehavioursubjectService } from '../services/behavioursubject.service';

@Component({
  selector: 'app-childbehavioursubject',
  standalone: true,
  imports: [],
  templateUrl: './childbehavioursubject.component.html',
  styleUrl: './childbehavioursubject.component.css'
})
export class ChildbehavioursubjectComponent {
constructor(public behaviorsub:BehavioursubjectService) {}
public data =  " "
ngOnInit() {
  console.log(this.behaviorsub.behavior);
  this.behaviorsub.behavior.subscribe(res=> {
    console.log(res);
    this.data = res
    
  })

  
}


}
