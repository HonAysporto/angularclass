import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Note{
  title: string;
  details:string;
  time:string;

}

@Component({
  selector: 'app-noteapp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './noteapp.component.html',
  styleUrl: './noteapp.component.css'
})
export class NoteappComponent {

  formnote:FormGroup;
  public noteArray:Note[]= []
  public Datel = new Date()
  public formattedDate:string = this.Datel.toLocaleTimeString('en-Us')

  constructor(public builder: FormBuilder, public rout: Router) {
    this.formnote = this.builder.group({
      title:'',
      details:'',
      time:this.formattedDate
    })


    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('noteInformation');
      if (storedData) {
          this.noteArray = JSON.parse(storedData)
      }
    }
  }


  reactive() {
    console.log(this.formnote.value);
    this.noteArray.push(this.formnote.value)
    console.log(this.noteArray);
    localStorage.setItem('noteInformation', JSON.stringify(this.noteArray));
    this.formnote.reset()
   
    
    
  }

  route(i:number) {
    this.rout.navigate([`/noteapp/${i}`])
  }


  delete(i:number) {
    this.noteArray.splice(i, 1);
    localStorage.setItem('noteInformation', JSON.stringify(this.noteArray));
  }


  edit(i:number) {
    this.rout.navigate([`/noteapp/edit/${i}`])
  }

}
