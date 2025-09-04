import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {id: 1, name: "POCO X6", price: 250, location: "SM Tarlac", brand: "POCO"},
    {id: 2, name: "POCO X7 PRO", price: 359, location: "SM BAGUIO", brand: "POCO"},
    {id: 3, name: "POCO F7", price: 530, location: "AMAZON", brand: "POCO"},
  ];
}

