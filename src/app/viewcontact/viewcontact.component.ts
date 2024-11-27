import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-viewcontact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.css'
})
export class ViewcontactComponent {

  constructor(public route : Router) {}

  public userinfo:any = {}
  ngOnInit() {
    this.userinfo=JSON.parse(localStorage.getItem('viewobject')!)
    console.log(this.userinfo);
    
  }

  return() {
    this.route.navigate(['/tazer'])
  }
}
