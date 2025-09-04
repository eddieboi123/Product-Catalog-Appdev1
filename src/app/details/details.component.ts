import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  productId: number | null = null;
  product: any = null;

products = [
  {id: 1, name: "POCO X6", price: 250, location: "SM Tarlac", brand: "POCO",
   description: "Slightly used, minor scratches",
   features: ["6GB RAM", "128GB Storage", "64MP Camera", "5000mAh Battery", "AMOLED Display"]},

  {id: 2, name: "POCO X7 Pro", price: 359, location: "SM Baguio", brand: "POCO",
   description: "Like new, excellent condition",
   features: ["8GB RAM", "256GB Storage", "108MP Camera", "67W Fast Charging", "120Hz AMOLED"]},

  {id: 3, name: "POCO F7", price: 530, location: "Amazon", brand: "POCO",
   description: "Open box, good as new",
   features: ["12GB RAM", "512GB Storage", "200MP Camera", "5G Support", "Liquid Cooling"]},

  {id: 4, name: "POCO M6", price: 199, location: "SM Clark", brand: "POCO",
   description: "Slightly bent frame",
   features: ["4GB RAM", "64GB Storage", "50MP Camera", "5000mAh Battery", "Side Fingerprint"]},

  {id: 5, name: "POCO X5", price: 230, location: "SM Pampanga", brand: "POCO",
   description: "Battery replaced, works fine",
   features: ["6GB RAM", "128GB Storage", "48MP Camera", "33W Fast Charging", "AMOLED Display"]},

  {id: 6, name: "POCO F5", price: 480, location: "Lazada", brand: "POCO",
   description: "Minor dents, screen intact",
   features: ["8GB RAM", "256GB Storage", "64MP OIS Camera", "Snapdragon 7+ Gen 2", "67W Fast Charging"]},

  {id: 7, name: "POCO C65", price: 150, location: "Shopee", brand: "POCO",
   description: "Brand new, sealed box",
   features: ["4GB RAM", "128GB Storage", "50MP Dual Camera", "5000mAh Battery", "90Hz Display"]},

  {id: 8, name: "POCO X6 Pro", price: 310, location: "SM Manila", brand: "POCO",
   description: "Slight back cover damage",
   features: ["8GB RAM", "256GB Storage", "120Hz AMOLED", "MediaTek Dimensity 8300", "67W Charging"]},

  {id: 9, name: "POCO F4 GT", price: 420, location: "SM Cebu", brand: "POCO",
   description: "Light scratches on screen",
   features: ["12GB RAM", "256GB Storage", "Gaming Triggers", "120W HyperCharge", "AMOLED HDR10+"]},

  {id: 10, name: "POCO M5", price: 180, location: "SM Tarlac", brand: "POCO",
   description: "Water damaged, still functional",
   features: ["4GB RAM", "128GB Storage", "50MP Camera", "5000mAh Battery", "FHD+ Display"]},

  {id: 11, name: "POCO F3", price: 350, location: "SM Baguio", brand: "POCO",
   description: "Good condition, minor frame dent",
   features: ["6GB RAM", "128GB Storage", "Snapdragon 870", "120Hz AMOLED", "Dolby Atmos"]},

  {id: 12, name: "POCO X4 Pro", price: 280, location: "SM Pampanga", brand: "POCO",
   description: "Battery health 85%",
   features: ["6GB RAM", "128GB Storage", "AMOLED Display", "67W Fast Charging", "108MP Camera"]},

  {id: 13, name: "POCO C55", price: 120, location: "Shopee", brand: "POCO",
   description: "Refurbished unit",
   features: ["4GB RAM", "64GB Storage", "50MP Camera", "5000mAh Battery", "HD+ Display"]},

  {id: 14, name: "POCO F2 Pro", price: 390, location: "Amazon", brand: "POCO",
   description: "Slightly used, no major issues",
   features: ["6GB RAM", "128GB Storage", "Pop-up 20MP Camera", "Snapdragon 865", "5G Support"]},

  {id: 15, name: "POCO M4 Pro", price: 210, location: "SM Manila", brand: "POCO",
   description: "Charging port issue",
   features: ["6GB RAM", "128GB Storage", "90Hz AMOLED", "33W Charging", "64MP Triple Camera"]},

  {id: 16, name: "POCO X3 NFC", price: 260, location: "SM Clark", brand: "POCO",
   description: "Cracked back glass",
   features: ["6GB RAM", "128GB Storage", "120Hz Display", "5160mAh Battery", "Quad Camera"]},

  {id: 17, name: "POCO F5 Pro", price: 510, location: "SM Cebu", brand: "POCO",
   description: "Brand new stock",
   features: ["12GB RAM", "512GB Storage", "Snapdragon 8+ Gen 1", "WQHD+ AMOLED", "67W Charging"]},

  {id: 18, name: "POCO X3 Pro", price: 240, location: "Shopee", brand: "POCO",
   description: "Heavy scratches, still works fine",
   features: ["6GB RAM", "128GB Storage", "Snapdragon 860", "120Hz FHD+ Display", "5160mAh Battery"]},

  {id: 19, name: "POCO C40", price: 110, location: "Lazada", brand: "POCO",
   description: "Open box, like new",
   features: ["4GB RAM", "64GB Storage", "HD+ Display", "6000mAh Battery", "13MP Dual Camera"]},

  {id: 20, name: "POCO F1", price: 200, location: "SM Pampanga", brand: "POCO",
   description: "Old model, still functional",
   features: ["6GB RAM", "128GB Storage", "Snapdragon 845", "LiquidCool Tech", "Infrared Face Unlock"]},

  {id: 21, name: "POCO M3", price: 140, location: "SM Tarlac", brand: "POCO",
   description: "Battery bulging, needs replacement",
   features: ["4GB RAM", "128GB Storage", "48MP Triple Camera", "6000mAh Battery", "FHD+ Display"]},

  {id: 22, name: "POCO X2", price: 210, location: "SM Baguio", brand: "POCO",
   description: "Slight frame bend",
   features: ["6GB RAM", "128GB Storage", "120Hz LCD", "64MP Quad Camera", "4500mAh Battery"]},

  {id: 23, name: "POCO X5 Pro", price: 300, location: "SM Clark", brand: "POCO",
   description: "Near mint condition",
   features: ["8GB RAM", "256GB Storage", "AMOLED Display", "67W Charging", "Snapdragon 778G"]},

  {id: 24, name: "POCO F4", price: 400, location: "Amazon", brand: "POCO",
   description: "Slightly cracked corner",
   features: ["8GB RAM", "256GB Storage", "Snapdragon 870", "64MP OIS Camera", "120Hz AMOLED"]},

  {id: 25, name: "POCO M2 Pro", price: 160, location: "Shopee", brand: "POCO",
   description: "Refurbished, works well",
   features: ["4GB RAM", "64GB Storage", "48MP Quad Camera", "5000mAh Battery", "18W Fast Charging"]},

  {id: 26, name: "POCO C50", price: 100, location: "SM Manila", brand: "POCO",
   description: "Good entry-level phone",
   features: ["3GB RAM", "32GB Storage", "8MP Camera", "5000mAh Battery", "HD+ Display"]},

  {id: 27, name: "POCO F6", price: 450, location: "Lazada", brand: "POCO",
   description: "Brand new, sealed unit",
   features: ["12GB RAM", "256GB Storage", "Snapdragon 8 Gen 2", "120Hz AMOLED", "120W Charging"]},

  {id: 28, name: "POCO X1", price: 190, location: "SM Cebu", brand: "POCO",
   description: "Scratched display",
   features: ["4GB RAM", "64GB Storage", "48MP Camera", "5000mAh Battery", "FHD+ Display"]},

  {id: 29, name: "POCO M2", price: 130, location: "SM Pampanga", brand: "POCO",
   description: "Battery drain issue",
   features: ["4GB RAM", "64GB Storage", "13MP Quad Camera", "5000mAh Battery", "18W Charging"]},

  {id: 30, name: "POCO C3", price: 90, location: "Shopee", brand: "POCO",
   description: "Old stock, limited warranty",
   features: ["3GB RAM", "32GB Storage", "13MP Triple Camera", "5000mAh Battery", "HD+ Display"]}
];


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }
}

