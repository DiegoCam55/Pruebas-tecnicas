import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../interfaces/ProductoCategoria';
import { ProductsService } from '../../services/products.service';
import { CardComponent } from '../../../components/card/card.component';
import {
  Subject,
  startWith,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private productsService = inject(ProductsService);
  products: Producto[] = [];
  searchTerm: string = '';

  searchSubject = new Subject<string>();

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) =>
          term
            ? this.productsService.getSearchAllproduct(term)
            : this.productsService.getAllproduct()
        )
      )
      .subscribe((data) => { 
        this.products = data;
      });
  }

  onSearchChange(term: string) {
    this.searchSubject.next(term);
  }

  search() {
    this.productsService
      .getSearchAllproduct(this.searchTerm)
      .subscribe((data) => {
        this.products = data;
      });
  }
}
