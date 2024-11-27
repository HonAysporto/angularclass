import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-editcontact',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editcontact.component.html',
  styleUrl: './editcontact.component.css'
})
export class EditcontactComponent {

  constructor(public activatedroute : ActivatedRoute, public route : Router) {
   

  }
public editfirstname = ''
public editlastname = ''
public editemail = ''
public editphonenumber = ''


  public index:number  = 0
  public user:any 
  public incomingArray:any = (localStorage.getItem('information'));
  public array:any = JSON.parse(this.incomingArray)

  ngOnInit() {
    this.index = this.activatedroute.snapshot.params['index']
    console.log(this.index);
    
    this.user = (JSON.parse(this.incomingArray)[this.index]);
    console.log(this.user);
    this.editfirstname = this.user.Firstname
    this.editlastname = this.user.Lastname
    this.editemail = this.user.Email
    this.editphonenumber = this.user.Phonenumber
    
  }

  
 
  edit() {
    let edituserobj = {
      Firstname : this.editfirstname,
    Lastname: this.editlastname,
    Email: this.editemail,
    Phonenumber: this.editphonenumber
    }

    console.log(edituserobj);
    this.array[this.index] = edituserobj
    console.log(this.array);
    localStorage.setItem('information', JSON.stringify(this.array))
    this.route.navigate(['/tazer'])
    
  }
  
  
  
 
}
