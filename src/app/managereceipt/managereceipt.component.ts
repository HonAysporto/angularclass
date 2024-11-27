import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-managereceipt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './managereceipt.component.html',
  styleUrl: './managereceipt.component.css'
})
export class ManagereceiptComponent {

  public allreciepts:any = []

  ngOnInit() {
    this.allreciepts = JSON.parse(localStorage.getItem('allreceipts') || '[]');
  }

  approve(i:number) {
    
    this.allreciepts[i].status = 'approved'
    localStorage.setItem('allreceipts', JSON.stringify(this.allreciepts))
    
  }

  reject(i:number) {
    this.allreciepts[i].status = 'rejected'
    localStorage.setItem('allreceipts', JSON.stringify(this.allreciepts))
  }

}
