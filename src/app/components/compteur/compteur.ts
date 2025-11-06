import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBy, decrement, increment, reset } from '../../stores/counter/counter.action';
import { selectValeur } from '../../stores/counter/counter.selector';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compteur',
  imports: [FormsModule],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css'
})
export class CompteurComponent {
  valeur = 0
  step = 0
  constructor(private store: Store) {
    store.select(selectValeur).subscribe(v => this.valeur = v)
  }
  incrementer() {
    // this.valeur += 1
    this.store.dispatch(increment())
  }
  decrementer() {
    // this.valeur -= 1
    this.store.dispatch(decrement())
  }
  ajouter() {
    this.store.dispatch(addBy({ value: this.step }))
  }
  reset() {
    this.store.dispatch(reset())
  }
}
