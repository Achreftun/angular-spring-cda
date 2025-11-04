import { Injectable } from '@angular/core';
import Personne from '../models/personne';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic';

@Injectable({
  providedIn: 'root'
})
export class PersonneService extends GenericService<Personne> {
  constructor(http: HttpClient) {
    super(http, 'personnes')
  }

  // getPersonnes(): Observable<Personne[]> {
  //   return this.http.get<Personne[]>(this.url)
  // }

  // getPersonneById(id: number): Observable<Personne> {
  //   return this.http.get<Personne>(`${this.url}/${id}`)
  //   // return this.personnes.find(p => p.id == id)
  // }

  // save(p: Personne): Observable<Personne> {
  //   return this.http.post<Personne>(this.url, p);
  // }
  // update(id: number, p: Personne): Observable<Personne> {
  //   return this.http.put<Personne>(`${this.url}/${id}`, p);
  // }

  // remove(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.url}/${id}`)
  //   // this.personnes.splice(ind, 1)
  // }
}
