import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../../security/service/connexion.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

   constructor(public connexion : ConnexionService , private router : Router){}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  onLogout(){
    this.connexion.logout();
  }
  // onUpdateUtilisateur(utilisateur){
  //   let id=utilisateur.idUtilisateur
  //   this.router.navigateByUrl("modifierutilisateur/"+ id);
  //  // console.log(btoa(id))
  // }

  onPayement(){
    this.router.navigateByUrl("/base/payement");
  }
}
