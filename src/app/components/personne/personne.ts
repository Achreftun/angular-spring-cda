import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne';
import Personne from '../../models/personne';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { FormPersonne } from "../form-personne/form-personne";

@Component({
  selector: 'app-personne',
  imports: [FormsModule, RouterLink, FormPersonne],
  templateUrl: './personne.html',
  styleUrl: './personne.css'
})
export class PersonneComponent implements OnInit {
  personne: Personne = {}
  personnes: Personne[] = []
  erreur: string | null = null
  constructor(private ps: PersonneService) { }
  ngOnInit(): void {
    // this.personnes = this.ps.getPersonnes()
    this.ps.findAll().subscribe({
      next: res => this.personnes = res,
      error: err => {
        console.log(err);
        this.erreur = "Liste temporairement indisponible"
      }

    })
  }

  ajouter() {
    this.ps.save(this.personne).subscribe(res => {
      this.personnes.push(res)

    })
  }

  supprimer(ind: number, id: number | null | undefined) {
    console.log(ind, id);

    this.ps.remove(id ?? 0).subscribe(res => {
      this.personnes.splice(ind, 1)
    })
  }
}
