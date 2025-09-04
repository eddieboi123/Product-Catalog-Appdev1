import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = [
    {id: 1, name: "cherry mobile", price: 1249.0, location: "SM Tarlac"},
    {id: 1, name: "cherry mobile", price: 1249.0, location: "SM Tarlac"},
    {id: 1, name: "cherry mobile", price: 1249.0, location: "SM Tarlac"},
    {id: 1, name: "cherry mobile", price: 1249.0, location: "SM Tarlac"},
  ];
}
