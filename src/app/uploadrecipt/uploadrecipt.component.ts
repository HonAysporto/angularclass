import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-uploadrecipt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uploadrecipt.component.html',
  styleUrl: './uploadrecipt.component.css'
})
export class UploadreciptComponent {

  public imageSrc:any
  public status = 'unaproved';
  public studentdetails:any = {}
  public studentid = ''
  public allreceipt:any = []
  public personalrecipts:any = []





  ngOnInit() {
    this.studentdetails = JSON.parse(localStorage.getItem('studentdetails')!)
    this.allreceipt = JSON.parse(localStorage.getItem('allreceipts') || '[]');

    let receipt = this.allreceipt.filter((receipt:any)=>receipt.studentid == this.studentdetails.studentid)

    if(receipt) {
      this.personalrecipts = receipt
    } else {
      this.personalrecipts = []
    }

    console.log(this.personalrecipts);
    
  }

generateReceipt() {
    const randomNumbers = Math.floor(Math.random() * 1000);
    return `Receipt-${String(randomNumbers).padStart(3, '0')}`; 
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

  upload() {

    if (this.imageSrc) {
        let receiptobj = {
          image: this.imageSrc,
          status: this.status,
          id : this.generateReceipt(),
          studentid : this.studentdetails.studentid

        }
        this.allreceipt.push(receiptobj);
        localStorage.setItem('allreceipts', JSON.stringify(this.allreceipt))
        
    }

    this.personalrecipts = this.allreceipt.filter(
      (receipt: any) => receipt.studentid === this.studentdetails.studentid
    );

    
    this.imageSrc = null;
    
  }

}
