import { Component } from '@angular/core';
import { StudentserviceService } from '../services/studentservice.service';
import { StudentdashboardnavComponent } from '../studentdashboardnav/studentdashboardnav.component';

@Component({
  selector: 'app-dashboardpro',
  standalone: true,
  imports: [StudentdashboardnavComponent],
  templateUrl: './dashboardpro.component.html',
  styleUrl: './dashboardpro.component.css'
})
export class DashboardproComponent {
  public userinfo:any = {};
  public studentArray:any = []
  studentIndex = 0;

  constructor(public studentserve:StudentserviceService) {

  }

  public imageSrc:any


  ngOnInit() {
    // this.studentserve.studentinfo.subscribe(res=> {
    //   console.log(res);
    //   this.userinfo = res;
    //   console.log(this.userinfo.email);
    // })

    this.userinfo = this.studentserve.getstudentinformation()

    this.studentArray = JSON.parse(localStorage.getItem("studentarray")!)
  }


  onImageSelected(event: Event){
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  upload(){
    
    if (this.imageSrc) {
      this.studentArray.find((student: any, index: number) => {
        if (student.email == this.userinfo.email ) {
            this.studentIndex = index
            return true
        }
        return false 
    });
    this.studentArray[this.studentIndex].image = this.imageSrc
    localStorage.setItem('studentarray', JSON.stringify(this.studentArray))
      // localStorage.setItem('profileImage', this.imageSrc);
      alert('Profile picture saved!');
    } else {
      alert('Please select an image first.');
    }
  }

}
