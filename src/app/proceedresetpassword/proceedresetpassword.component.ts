import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proceedresetpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './proceedresetpassword.component.html',
  styleUrl: './proceedresetpassword.component.css'
})
export class ProceedresetpasswordComponent {

  public password = '';
  public cpassword = '';
  public email:any = '';
  public allstudents:any = []
  public studentIndex = 0;
  public msg = ''


  ngOnInit() {
    this.email = JSON.parse(localStorage.getItem('email')!);
    this.allstudents = JSON.parse(localStorage.getItem('studentarray')!)
  }

  update() {


    this.allstudents.find((student: any, index: number) => {
      if (student.email == this.email ) {
          this.studentIndex = index
          return true
      }
      return false 
  });

  if (this.password == this.cpassword) {

 (this.allstudents[this.studentIndex].password) = this.password;
 localStorage.setItem('studentarray', JSON.stringify(this.allstudents));
 this.msg='password changed successfully'
 this.password = '';
 this.cpassword = '';
  } else {
    this.msg='Enter same password'
    this.password = '';
    this.cpassword = '';
  }

  
  
  }

}
