import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { Mobile1Component } from './mobile1/mobile1.component';
import { Mobile2Component } from './mobile2/mobile2.component';
import { Mobile3Component } from './mobile3/mobile3.component';
import { DetailsComponent } from './details/details.component';




export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'mobile1',component:Mobile1Component},
    {path:'mobile2',component:Mobile2Component},
    {path:'mobile3',component:Mobile3Component},
    { path: 'details/:id', component:DetailsComponent }
];
