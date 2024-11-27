import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentserviceService } from '../services/studentservice.service';

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {
public studentdetails:any = {}
public studentemail:string = ''
public studentArray:any = []

public oldpass =''
public newpass = ''
public confirmpass = ''
public dispmsg = ''

constructor(public studentserve:StudentserviceService) {


}


  ngOnInit() {
 
   this.studentArray = JSON.parse(localStorage.getItem("studentarray")!)
  
    this.studentserve.studentinfo.subscribe(res=> {
      console.log(res);
      this.studentdetails = res
      })
      this.studentemail = this.studentdetails['email']
  }

  change() {
    let studentIndex = 0; // Variable to hold the index
    let student = this.studentArray.find((student: any, index: number) => {
        if (student.email == this.studentemail && student.password == this.oldpass) {
            studentIndex = index
            return true
        }
        return false 
    });

    if (student) {
        if (this.newpass === this.confirmpass) {
            // console.log(studentIndex);
            console.log(student);
            this.studentArray[studentIndex].password = this.newpass
            localStorage.setItem('studentarray', JSON.stringify(this.studentArray))
            this.dispmsg = ('Password changed successfully');
            
        } else {
          this.dispmsg = ('Enter the same new password');
        }
    } else {
      this.dispmsg = ('Incorrect Old password');
    }
}


}
