import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Personne from '../../models/personne';

@Component({
  selector: 'app-form-personne',
  imports: [FormsModule],
  templateUrl: './form-personne.html',
  styleUrl: './form-personne.css'
})
export class FormPersonne {
  @Input() title = ''
  @Input() personne: Personne = {}
  @Output() personneChange = new EventEmitter<Personne>();


  enregistrer(form: NgForm) {
    this.personneChange.emit(this.personne)
    form.reset()

  }
}
