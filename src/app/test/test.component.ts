import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface group {
  Product: string,
  Description: string,
  Quantity: number
}


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

export class TestComponent {

  public product:string = ''
  public description:string = ''
  public quantity:number = 0

  public groups:group[] = []


  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('information2')
      if (storedData) {
        this.groups = JSON.parse(storedData)
      }
    }
  }

  add() {
    const productobj = {
      Product : this.product,
      Description: this.description,
      Quantity: this.quantity
    }

    this.groups.push(productobj)
    localStorage.setItem('information2', JSON.stringify(this.groups))

    console.log(this.groups);
    
  }

  delete(index:number) {
    this.groups.splice(index, 1)
    localStorage.setItem("information2", JSON.stringify(this.groups))

  }



}




