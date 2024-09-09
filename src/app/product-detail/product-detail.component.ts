import { Component, OnInit, inject, Input } from '@angular/core';
import { ApiProductService } from '../services/api-product.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Products } from '../types/types';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  public products$!: Observable<Products>
  private api: ApiProductService = inject(ApiProductService)
  @Input('id') productsId! : string;
  ngOnInit(): void {
    this.products$ = this.api.getOne(this.productsId)
  }
}
