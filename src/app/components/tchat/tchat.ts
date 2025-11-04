import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParticipantComponent } from '../participant/participant';

@Component({
  selector: 'app-tchat',
  imports: [FormsModule, ParticipantComponent],
  templateUrl: './tchat.html',
  styleUrl: './tchat.css'
})
export class TchatComponent {
  noms: string[] = []
  nom = ''
  ajouter() {
    this.noms.push(this.nom)
    this.nom = ''
  }
}
