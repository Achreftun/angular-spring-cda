import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-touche',
  imports: [],
  templateUrl: './touche.html',
  styleUrl: './touche.css'
})
export class ToucheComponent {
  
  @Input() lettre = ''
  @Output() sendLetter = new EventEmitter()

  envoyer() {
    this.sendLetter.emit()
  }
}
