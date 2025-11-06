import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LigneCommande } from '../../models/ligne-commande';
import { selectLignesCommandes } from '../../stores/cart/cart.selector';
import { remove, reset } from '../../stores/cart/cart.action';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.css'
})
export class PanierComponent {
  lignesCommandes: LigneCommande[] = []
  constructor(private store: Store) {
    this.store.select(selectLignesCommandes).subscribe(lcs => this.lignesCommandes = lcs)
  }
  supprimerProduit(index: number) {
    this.store.dispatch(remove({ lc: this.lignesCommandes[index] }))
  }
  supprimerTout() {
    this.store.dispatch(reset())
  }
}
