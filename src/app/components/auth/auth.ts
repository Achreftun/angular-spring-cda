import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class AuthComponent {
  user: User = {}
  constructor(private router: Router) { }
  erreur: String | null = null
  seConnecter(form: NgForm) {
    if (this.user.username == 'user' && this.user.password == "user") {
      localStorage.setItem('isConnected', 'true')
      const url = this.router.createUrlTree(['/adresse'], { queryParams: { ville: 'Marseille', codePostal: '13000' } })
      this.router.navigateByUrl(url)
    } else {
      this.erreur = "Identifiants incorrects"
    }

  }
}
