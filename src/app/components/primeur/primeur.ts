import { Component, QueryList, ViewChildren, viewChildren } from '@angular/core';
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
  @ViewChildren(ProduitComponent) produitsComponent!: QueryList<ProduitComponent>
  total = 0
  produit: Produit = {}
  produits: Produit[] = [
    { nom: "banane", prix: 3, quantite: 10 },
    { nom: "fraise", prix: 10, quantite: 20 },
    { nom: "poivron", prix: 5, quantite: 10 }
  ]
  calculerTotal(ind: number) {
    const qteReservee = this.produitsComponent.get(ind)?.qteReservee ?? 0
    this.total += qteReservee * (this.produits[ind].prix ?? 0)
    // if (this.produits[ind].quantite) {
    // this.produits[ind].quantite! -= qteReservee
    // }
  }
  ajouter() {
    this.produits.push(this.produit)
    this.produit = {}
  }
}
