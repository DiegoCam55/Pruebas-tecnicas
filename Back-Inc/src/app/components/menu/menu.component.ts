import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Category } from '../../interfaces/ProductoCategoria';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  private productsService = inject(ProductsService);
  categories: Category[] = [];

  ngOnInit(): void {
    this.productsService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
