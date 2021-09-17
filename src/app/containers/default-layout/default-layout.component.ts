import {Component} from '@angular/core';
import { ConnexionService } from '../../security/service/connexion.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

   constructor(public connexion : ConnexionService){}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  onLogout(){
    this.connexion.logout();
  }
}
