import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from '../services/studentservice.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {

  public studentarray:any = []
  public email = '';
  public msg = "";


  constructor (public router: Router, public studentserve : StudentserviceService) {}

  ngOnInit() {
    this.studentarray= JSON.parse(localStorage.getItem('studentarray')!)
  }


  signin() {


    let student = this.studentarray.find((student:any, index:number)=>student.email==this.email )

    if (student) {
      if (student.status == 'active') {
        localStorage.setItem('email', JSON.stringify(this.email));
        this.router.navigate(['/proceedforgotpassword']);
      } else {
        this.msg = 'Account deactivated, See front desk';
      }
    } else {
      this.msg = 'no record found'
    }
  }
}
