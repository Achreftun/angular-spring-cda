import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilsComponent } from "../fils/fils";

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css'
})
export class PereComponent {
  @ViewChild(FilsComponent) fils!: FilsComponent
  @ViewChildren(FilsComponent) enfants!: QueryList<FilsComponent>
  pays: string | null = null
  nom = "John Wick"
  ville = "Marseille"
  noms = ["John Wick", "Jane Doe", "Harry Potter"]
  villes = ["Marseille", "Paris", "Lyon"]

  afficherPays(pays: string) {
    console.log(pays);

    this.pays = pays
  }
  espionnerUn() {
    console.log(this.fils.ville);
  }
  espionnerTout() {
    this.enfants.forEach(enf => console.log(enf.ville))
  }
}
