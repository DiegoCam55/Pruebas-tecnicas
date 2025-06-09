import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../dashboard/services/products.service'; 
import { Producto } from '../../dashboard/interfaces/ProductoCategoria';
 

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
})
export class ProductSliderComponent implements OnInit {
  private productsService = inject(ProductsService);

  currentIndex = 0;
  intervalId: any;
  intervalTime = 1000;
  items: Producto[] = [];

  ngOnInit() {
    this.productsService.getAllproduct().subscribe((data) => {
      this.items = data.slice(10, 30); //
    });
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }
}
