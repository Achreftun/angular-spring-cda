import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectNombreProduit, selectQuantiteTotale } from '../../stores/cart/cart.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  qteTotale$: Observable<number>
  nombreProduit$: Observable<number>
  constructor(private store: Store) {
    this.qteTotale$ = store.select(selectQuantiteTotale)
    this.nombreProduit$ = store.select(selectNombreProduit)
  }
}
