import { Component, EventEmitter, Output } from '@angular/core';
import { EventchildComponent } from '../eventchild/eventchild.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventparent',
  standalone: true,
  imports: [EventchildComponent, FormsModule],
  templateUrl: './eventparent.component.html',
  styleUrl: './eventparent.component.css'
})
export class EventparentComponent {
public msg = ''
  public msgtochild = '';
  public response=''



  receivemsg(data:any) {
    this.response=data
  }

  send() {
   this.msg = this.msgtochild;
   this.msgtochild=''
  }

}
