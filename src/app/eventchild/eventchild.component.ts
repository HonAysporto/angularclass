import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventchild.component.html',
  styleUrl: './eventchild.component.css'
})
export class EventchildComponent {
  @Input() sendmsg=''
  public msgtoparent = ''
  @Output() eventemit= new EventEmitter


  send() {
    this.eventemit.emit(this.msgtoparent)
    this.msgtoparent = '';
  }
}
