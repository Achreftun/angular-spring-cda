import { Injectable } from '@angular/core';
import Personne from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private personnes: Personne[]
  constructor() {
    this.personnes = [
      { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
      { id: 2, nom: 'Dalton', prenom: 'Jack', age: 35 },
      { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 43 },
    ]
  }

  getPersonnes() {
    return this.personnes
  }

  getPersonneById(id: number) {
    return this.personnes.find(p => p.id == id)
  }

  save(p: Personne) {
    this.personnes.push(p)
  }
  
  remove(ind: number) {
    this.personnes.splice(ind, 1)
  }
}
