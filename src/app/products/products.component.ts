import { Component, OnInit } from '@angular/core';
import { ApiProductService } from '../services/api-product.service';
import { Observable } from 'rxjs';
import { Products } from '../types/types';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public productsResult$!: Observable<Products[]>;
products: any;
  constructor(private apiProducts: ApiProductService, private router: Router) {}
  ngOnInit(): void {
    this.productsResult$ = this.apiProducts.getAll();
  }
  onProductClicked(productId: string | undefined): void {
    this.router.navigate(['/products', productId]);
  }
}
