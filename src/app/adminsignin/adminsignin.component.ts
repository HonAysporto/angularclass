import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminsignin.component.html',
  styleUrl: './adminsignin.component.css'
})
export class AdminsigninComponent {

  constructor (public router: Router) {}

  public email = "";
  public password = '';
  public adminarray:any = []
  public msg = ''

  ngOnInit() {
    this.adminarray= JSON.parse(localStorage.getItem('adminarray')!)

  }

  signin() {
    let admin = this.adminarray.find((student:any, index:number)=>student.email==this.email && student.password==this.password)

    if(admin) {
        console.log(admin);
        localStorage.setItem('admindetails', JSON.stringify(admin))
        
        this.router.navigate(['admindashboard'])
    
     
    } else {
      this.msg = 'no record found'
      // console.log('no record found');
    }

  }

}
