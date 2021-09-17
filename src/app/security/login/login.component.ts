import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConnexionService } from '../service/connexion.service';
import Swal from 'sweetalert2';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  erreur= 0;
  user = new User();

  constructor(private connexion: ConnexionService, public router: Router) { }

  ngOnInit(): void {
  }

  

  onLoggedin() {
    console.log(this.user.username)
    this.connexion.getUserFromDB(this.user.username)
    .subscribe(data => {
      console.log(data)
      if (data.password == this.user.password && data.username == this.user.username) {
        this.connexion.SignIn(data);
      //  Swal.fire('Bienvenue ', 'Vous etes Connecter avec Success!', 'success');
        this.router.navigate(['/']);
      }
      else
      this.erreur = 1;
      },
      (err) => console.log(err));
  }



}
