import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StudentserviceService } from '../services/studentservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentdashboardnav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './studentdashboardnav.component.html',
  styleUrl: './studentdashboardnav.component.css'
})
export class StudentdashboardnavComponent {


  constructor(public studentserve:StudentserviceService, public route: Router) {
  }

  public studentdetails:any = {}
  public profileImage:any



ngOnInit() {

  this.studentserve.studentinfo.subscribe(res=> {
    console.log(res);
    this.studentdetails = res
    })

this.profileImage = this.studentdetails.image
   

}


signout() {
  localStorage.setItem('studentdetails', JSON.stringify(''))
  this.route.navigate([''])

}

}
