import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {path: 'app-root', component: AppComponent},
    {path: 'app-contact', component: ContactComponent},
    {path: 'app-products', component: ProductsComponent},
    {path: 'products/:id', component: ProductDetailComponent},
   
];
