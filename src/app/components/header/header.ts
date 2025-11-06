import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectValeur } from '../../stores/counter/counter.selector';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  title = 'angular-standalone';
  valeur = 0

  constructor(private store: Store) {
    store.select(selectValeur).subscribe(v => this.valeur = v)
  }
}
