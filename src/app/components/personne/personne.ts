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

  ajouter(form: NgForm) {
    // this.personnes.push({ ...this.personne });
    // this.ps.save(form.value)
    // this.personnes.push(form.value);
    // console.log(form.value);
    // this.personne = {}
    this.ps.save(this.personne).subscribe(res => {
      this.personnes.push(res)
      form.reset()

    })
  }

  supprimer(ind: number, id: number | null | undefined) {
    console.log(ind, id);

    this.ps.remove(id ?? 0).subscribe(res => {
      this.personnes.splice(ind, 1)
    })
  }
}
