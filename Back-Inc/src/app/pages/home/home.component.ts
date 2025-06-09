import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from '../../components/menu/menu.component';
import { HeaderComponent } from "../../components/header/header.component";
import {  ProductSliderComponent } from "../../components/product-slider/product-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, HeaderComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
