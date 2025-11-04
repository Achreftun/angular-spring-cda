import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fils',
  imports: [FormsModule],
  templateUrl: './fils.html',
  styleUrl: './fils.css'
})
export class FilsComponent {
  @Input() ville: string | null = null
  @Output() sendPays = new EventEmitter<string>()
  pays = ''
  envoyer() {
    this.sendPays.emit(this.pays)
  }
}
