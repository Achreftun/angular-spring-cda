import { Component, Input, OnInit } from '@angular/core';
import Personne from '../../models/personne';
import { PersonneService } from '../../services/personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personne-details',
  imports: [],
  templateUrl: './personne-details.html',
  styleUrl: './personne-details.css'
})
export class PersonneDetailsComponent implements OnInit {
  personne: Personne | undefined
  @Input() id = 0
  constructor(private ps: PersonneService, private router: Router) {
  }
  ngOnInit(): void {
    this.personne = this.ps.getPersonneById(this.id)
  }
  retour() {
    this.router.navigateByUrl('/personne')
  }
}
