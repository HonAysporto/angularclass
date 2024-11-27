import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editnote',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editnote.component.html',
  styleUrl: './editnote.component.css'
})
export class EditnoteComponent {


formnote:FormGroup;
public index:number = 0;
public incomingArray:any = localStorage.getItem('noteInformation')
public note:any[] = JSON.parse(this.incomingArray)
public editnote:any 

constructor(public activatedroute: ActivatedRoute, public builder: FormBuilder, public rout: Router) {

  this.index = this.activatedroute.snapshot.params['index']
  this.editnote = this.note[this.index]
  console.log(this.editnote);

this.formnote = this.builder.group({
  title: this.editnote.title,
  details: this.editnote.details,
  time: this.editnote.time
})

}

edit() {
  // console.log(this.formnote.value);
  this.note[this.index] = this.formnote.value
  // console.log(this.note);
  localStorage.setItem('noteInformation', JSON.stringify(this.note));
  this.rout.navigate(['noteapp'])
   
}

}
