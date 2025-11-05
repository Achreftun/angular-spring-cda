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
    if (this.user.username == 'user' && this.user.password == "user" ||
      this.user.username == 'admin' && this.user.password == "admin" ||
      this.user.username == 'sadmin' && this.user.password == "sadmin"

    ) {
      localStorage.setItem('isConnected', 'true')
      localStorage.setItem('user', JSON.stringify(this.user))
      const url = this.router.createUrlTree(['/adresse'], { queryParams: { ville: 'Marseille', codePostal: '13000' } })
      this.router.navigateByUrl(url)
    } else {
      this.erreur = "Identifiants incorrects"
    }

  }
}
