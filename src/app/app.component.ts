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
    {id: 1, name: "POCO X6", price: 250, location: "SM Tarlac", brand: "POCO"},
    {id: 2, name: "POCO X7 PRO", price: 359, location: "SM BAGUIO", brand: "POCO"},
    {id: 3, name: "POCO F7", price: 530, location: "AMAZON", brand: "POCO"},
  ];
}
