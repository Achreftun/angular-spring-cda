import { Component, Input, OnInit } from '@angular/core';
import Personne from '../../models/personne';
import { PersonneService } from '../../services/personne';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personne-details',
  imports: [FormsModule],
  templateUrl: './personne-details.html',
  styleUrl: './personne-details.css'
})
export class PersonneDetailsComponent implements OnInit {
  personne: Personne ={}
  @Input() id = 0
  constructor(private ps: PersonneService, private router: Router) {
  }
  ngOnInit(): void {
    this.ps.findById(this.id).subscribe(res => {
      this.personne = res
    })
  }
  retour() {
    this.router.navigateByUrl('/personne')
  }
  modifier() {
    this.ps.update(this.id, this.personne).subscribe(res => {
      this.retour()
    })
  }
}
