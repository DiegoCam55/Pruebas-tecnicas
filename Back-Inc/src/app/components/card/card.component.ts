import { Component, Input, input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Producto } from '../../dashboard/interfaces/ProductoCategoria';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) product!: Producto;

}
