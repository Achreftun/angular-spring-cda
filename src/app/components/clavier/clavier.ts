import { Component } from '@angular/core';
import { ToucheComponent } from "../touche/touche";

@Component({
  selector: 'app-clavier',
  imports: [ToucheComponent],
  templateUrl: './clavier.html',
  styleUrl: './clavier.css'
})
export class ClavierComponent {
  texte = ''
  lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  afficherLettre(i: number) {
    this.texte += this.lettres[i]
  }
}
