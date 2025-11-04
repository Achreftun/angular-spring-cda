import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ville',
  imports: [FormsModule],
  templateUrl: './ville.html',
  styleUrl: './ville.css'
})
export class VilleComponent {
  @Input() ville = ''
  @Output() villeChange = new EventEmitter<string>()

  envoyer() {
    this.villeChange.emit(this.ville)
  }
}
