import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { Jwt } from '../models/jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  getTokens(user: User): Observable<Jwt> {
    return this.http.post<Jwt>(`${environment.BACKEND_URL}/authenticate`, user);
  }
}
