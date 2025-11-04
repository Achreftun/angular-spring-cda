import { Component } from '@angular/core';
import { VilleComponent } from "../ville/ville";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pays',
  imports: [VilleComponent, FormsModule],
  templateUrl: './pays.html',
  styleUrl: './pays.css'
})
export class PaysComponent {
  villes = ['Marseille', 'Lyon', 'Paris']
  // modifierVille(i: number, v: string) {
  //   this.villes[i] = v
  // }
}
