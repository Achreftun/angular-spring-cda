import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../../models/produit';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { add } from '../../stores/cart/cart.action';
import { LigneCommande } from '../../models/ligne-commande';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class ProduitComponent {
  isDisabled = false
  @Input() produit!: Produit
  @Output() sendQuantity = new EventEmitter<number>()
  qteReservee: number | null = null
  constructor(private store: Store) { }
  ajouterPanier() {
    const lc: LigneCommande = { produit: this.produit, qteReservee: this.qteReservee ?? 0 }
    this.store.dispatch(add({ lc }))
    this.sendQuantity.emit()
    this.isDisabled = true
  }
}
