import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  public msg = 'TAZERH';
  public firstname = 'Oyindamola';
  public age = 12;

  // public userSubject = new BehaviorSubject<any[]>(this.getInitialUsers())
  // public users$ = this.userSubject.asObservable();

  public incomingArray: any;
  public storedArray: any;

  // public testArray = [
  //   { product: 'Rice', description: 'Food' },
  //   { product: 'Beans', description: 'Food' },
  //   { product: 'Gun', description: 'Weapon' },
  //   { product: 'Iron', description: 'Appliances' },
  //   { product: 'Spaghetti', description: 'Food' },
  //   { product: 'Garri', description: 'Food' },
  //   { product: 'Sword', description: 'Weapon' },
  //   { product: 'Television', description: 'Appliances' }
  // ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.incomingArray = localStorage.getItem('information');
      
      this.storedArray = this.incomingArray ? JSON.parse(this.incomingArray) : [];
    } else {
       []; // Fallback for server-side rendering
    }
   

  }

    

// private getInitialUsers():any[] {

//   if (isPlatformBrowser(this.platformId)) {
//     const incomingArray = localStorage.getItem('information');
    
//     return incomingArray ? JSON.parse(incomingArray) : [];
//   } else {
//     return []; // Fallback for server-side rendering
//   }
 
// }





   
  
  // public getLastName() {
  //   return this.age;
  // }

  public getArray() {
    return  this.storedArray;
  }

  // public addUser(user: any) {
  //   const currentUsers = this.userSubject.value;
  //   currentUsers.push(user);
  //   localStorage.setItem('information', JSON.stringify(currentUsers));
  //   this.userSubject.next(currentUsers);
  // }



// public deleteUser(index:number ) {
//   const currentUsers = this.userSubject.value;
//   currentUsers.splice(index, 1)
//   localStorage.setItem('information', JSON.stringify(currentUsers));
//   this.userSubject.next(currentUsers); // notify subs
// }
}
