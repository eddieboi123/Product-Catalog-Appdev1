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
  {id: 1, name: "POCO X6", price: 250, location: "SM Tarlac", brand: "POCO", description: "Slightly used, minor scratches"},
  {id: 2, name: "POCO X7 Pro", price: 359, location: "SM Baguio", brand: "POCO", description: "Like new, excellent condition"},
  {id: 3, name: "POCO F7", price: 530, location: "Amazon", brand: "POCO", description: "Open box, good as new"},
  {id: 4, name: "POCO M6", price: 199, location: "SM Clark", brand: "POCO", description: "Slightly bent frame"},
  {id: 5, name: "POCO X5", price: 230, location: "SM Pampanga", brand: "POCO", description: "Battery replaced, works fine"},
  {id: 6, name: "POCO F5", price: 480, location: "Lazada", brand: "POCO", description: "Minor dents, screen intact"},
  {id: 7, name: "POCO C65", price: 150, location: "Shopee", brand: "POCO", description: "Brand new, sealed box"},
  {id: 8, name: "POCO X6 Pro", price: 310, location: "SM Manila", brand: "POCO", description: "Slight back cover damage"},
  {id: 9, name: "POCO F4 GT", price: 420, location: "SM Cebu", brand: "POCO", description: "Light scratches on screen"},
  {id: 10, name: "POCO M5", price: 180, location: "SM Tarlac", brand: "POCO", description: "Water damaged, still functional"},
  {id: 11, name: "POCO F3", price: 350, location: "SM Baguio", brand: "POCO", description: "Good condition, minor frame dent"},
  {id: 12, name: "POCO X4 Pro", price: 280, location: "SM Pampanga", brand: "POCO", description: "Battery health 85%"},
  {id: 13, name: "POCO C55", price: 120, location: "Shopee", brand: "POCO", description: "Refurbished unit"},
  {id: 14, name: "POCO F2 Pro", price: 390, location: "Amazon", brand: "POCO", description: "Slightly used, no major issues"},
  {id: 15, name: "POCO M4 Pro", price: 210, location: "SM Manila", brand: "POCO", description: "Charging port issue"},
  {id: 16, name: "POCO X3 NFC", price: 260, location: "SM Clark", brand: "POCO", description: "Cracked back glass"},
  {id: 17, name: "POCO F5 Pro", price: 510, location: "SM Cebu", brand: "POCO", description: "Brand new stock"},
  {id: 18, name: "POCO X3 Pro", price: 240, location: "Shopee", brand: "POCO", description: "Heavy scratches, still works fine"},
  {id: 19, name: "POCO C40", price: 110, location: "Lazada", brand: "POCO", description: "Open box, like new"},
  {id: 20, name: "POCO F1", price: 200, location: "SM Pampanga", brand: "POCO", description: "Old model, still functional"},
  {id: 21, name: "POCO M3", price: 140, location: "SM Tarlac", brand: "POCO", description: "Battery bulging, needs replacement"},
  {id: 22, name: "POCO X2", price: 210, location: "SM Baguio", brand: "POCO", description: "Slight frame bend"},
  {id: 23, name: "POCO X5 Pro", price: 300, location: "SM Clark", brand: "POCO", description: "Near mint condition"},
  {id: 24, name: "POCO F4", price: 400, location: "Amazon", brand: "POCO", description: "Slightly cracked corner"},
  {id: 25, name: "POCO M2 Pro", price: 160, location: "Shopee", brand: "POCO", description: "Refurbished, works well"},
  {id: 26, name: "POCO C50", price: 100, location: "SM Manila", brand: "POCO", description: "Good entry-level phone"},
  {id: 27, name: "POCO F6", price: 450, location: "Lazada", brand: "POCO", description: "Brand new, sealed unit"},
  {id: 28, name: "POCO X1", price: 190, location: "SM Cebu", brand: "POCO", description: "Scratched display"},
  {id: 29, name: "POCO M2", price: 130, location: "SM Pampanga", brand: "POCO", description: "Battery drain issue"},
  {id: 30, name: "POCO C3", price: 90, location: "Shopee", brand: "POCO", description: "Old stock, limited warranty"}
];

}

