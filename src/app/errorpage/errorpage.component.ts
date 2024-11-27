import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-errorpage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './errorpage.component.html',
  styleUrl: './errorpage.component.css'
})
export class ErrorpageComponent {

constructor(public userserve : UserserviceService) {}


}
