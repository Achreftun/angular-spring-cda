import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../../models/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class ProduitComponent {
  isDisabled=false
  @Input() produit!: Produit
  @Output() sendQuantity = new EventEmitter<number>()
  qteReservee: number | null = null
  ajouterPanier() {
    this.sendQuantity.emit(this.qteReservee ?? 0)
    this.isDisabled = true
  }
}
