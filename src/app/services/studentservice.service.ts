import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  private studentdetails:any = {}

  constructor() { }

  public studentinfo = new BehaviorSubject({})

  public savestudentinformation(student:any){
    this.studentdetails = student
  }

  public getstudentinformation(){
    return this.studentdetails
  }
}
