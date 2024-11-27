import { Component } from '@angular/core';
import { StudentserviceService } from '../services/studentservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewclassmates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewclassmates.component.html',
  styleUrl: './viewclassmates.component.css'
})
export class ViewclassmatesComponent {

  public userinfo:any = {};
  public studentArray:any = [];
  public studentIndex = 0;
  public classmates:any = [];


  constructor(public studentserve:StudentserviceService) {}

  ngOnInit() {
    this.studentserve.studentinfo.subscribe(res=> {
      console.log(res);
      this.userinfo = res;
     
    })

    this.studentArray = JSON.parse(localStorage.getItem("studentarray")!)

    this.classmates = this.studentArray.filter(
      (student: any) => student.class === this.userinfo.class && student.email !== this.userinfo.email
    );

    console.log(this.classmates);
    
  console.log(this.studentArray);
  

}


  }


