import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatButtonModule, MatInputModule,MatFormFieldModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {

  constructor(private _snackBar: MatSnackBar ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
