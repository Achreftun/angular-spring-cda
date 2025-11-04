import { Component } from '@angular/core';
import { ProduitComponent } from "../produit/produit";
import { Produit } from '../../models/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeur',
  imports: [ProduitComponent, FormsModule],
  templateUrl: './primeur.html',
  styleUrl: './primeur.css'
})
export class PrimeurComponent {
  total = 0
  produit: Produit = {}
  produits: Produit[] = [
    { nom: "banane", prix: 3, quantite: 10 },
    { nom: "fraise", prix: 10, quantite: 20 },
    { nom: "poivron", prix: 5, quantite: 10 }
  ]
  calculerTotal(qteReservee: number, ind: number) {
    this.total += qteReservee * (this.produits[ind].prix ?? 0)
    // if (this.produits[ind].quantite) {
      this.produits[ind].quantite! -= qteReservee
    // }
  }
  ajouter() {
    this.produits.push(this.produit)
    this.produit = {}
  }
}
