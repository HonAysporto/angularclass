import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  public admindetails:any = {}
  public studentArray:any = []

  ngOnInit() {

  this.admindetails = JSON.parse(localStorage.getItem('admindetails')!)
  this.studentArray = JSON.parse(localStorage.getItem("studentarray")!)
  }


  delete(i:number) {
    console.log(this.studentArray[i].status)
    this.studentArray[i].status = 'deactivated'
    localStorage.setItem('studentarray', JSON.stringify(this.studentArray))
  }

}
