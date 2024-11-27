import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Note{
  title: string;
  details:string;
  time:string;

}

@Component({
  selector: 'app-notedetails',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './notedetails.component.html',
  styleUrl: './notedetails.component.css'
})
export class NotedetailsComponent {

  constructor(public activatedroute: ActivatedRoute) {}

  public index:number = 0
  public note:any
  public incomingNote:any = localStorage.getItem('noteInformation');

ngOnInit() {
  this.index = this.activatedroute.snapshot.params['index']

  this.note = JSON.parse(this.incomingNote)[this.index]
  console.log(this.note);
  



}

}
