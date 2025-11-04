import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne';
import Personne from '../../models/personne';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-personne',
  imports: [FormsModule, RouterLink],
  templateUrl: './personne.html',
  styleUrl: './personne.css'
})
export class PersonneComponent implements OnInit {
  personne: Personne = {}
  personnes: Personne[] = []

  constructor(private ps: PersonneService) {  }
  ngOnInit(): void {
    this.personnes = this.ps.getPersonnes()
  }

  ajouter(form: NgForm) {
    // this.personnes.push({ ...this.personne });
    this.ps.save(form.value)
    // this.personnes.push(form.value);
    console.log(form.value);
    // this.personne = {}
    form.reset()
  }

  supprimer(ind: number) {
    this.ps.remove(ind)
  }
}
