import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare const bootstrap: any;

@Component({
  selector: 'app-notekeep',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notekeep.component.html',
  styleUrl: './notekeep.component.css'
})
export class NotekeepComponent {

  public ntitle = '';
  public ndetails = '';
  public studentdetails:any = [];
  public currentstudent:any = []
  public studentIndex = 0
  public notes:any = [];
  public editTitle = '';
public editDetails = '';
public editingIndex: number | null = null;





  ngOnInit() {

this.studentdetails = JSON.parse(localStorage.getItem('studentarray')!)
this.currentstudent = JSON.parse(localStorage.getItem('studentdetails')!)
this.studentdetails.find((student: any, index: number) => {
  if (student.email == this.currentstudent.email ) {
      this.studentIndex = index
      return true
  }
  return false 
});

this.notes =  this.studentdetails[this.studentIndex].note
  }



  save() {

   let noteobj = {
  title: this.ntitle,
  details: this.ndetails
    }

 
    this.ntitle = ''
    this.ndetails = ''

  this.studentdetails[this.studentIndex].note.push(noteobj)
  localStorage.setItem('studentarray', JSON.stringify(this.studentdetails));
  }


  edit(index: number) {
    this.editingIndex = index;
    const note = this.studentdetails[this.studentIndex].note[index];
    this.editTitle = note.title;
    this.editDetails = note.details;

    
    const modalElement = document.getElementById('editNoteModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
}

updateNote() {
  if (this.editingIndex !== null) {
      this.studentdetails[this.studentIndex].note[this.editingIndex] = {
          title: this.editTitle,
          details: this.editDetails
      };

  
      localStorage.setItem('studentarray', JSON.stringify(this.studentdetails));

      
      this.editTitle = '';
      this.editDetails = '';
      this.editingIndex = null;
  }
}



  delete(i:number) {
    this.studentdetails[this.studentIndex].note.splice(i, 1);
    localStorage.setItem('studentarray', JSON.stringify(this.studentdetails));
  }

}
