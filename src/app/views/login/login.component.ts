import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../security/model/user';
import { ConnexionService } from '../../security/service/connexion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

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
     let iduser = data.user_id
     console.log(iduser)
      if (data.password == this.user.password && data.username == this.user.username) {
        this.connexion.SignIn(data);
       // Swal.fire('Bienvenue ', 'Vous etes Connecter avec Success!', 'success');
        this.router.navigate(['/']);
      }
      else
      this.erreur = 1;
      },
      (err) => console.log(err));
  }


}
