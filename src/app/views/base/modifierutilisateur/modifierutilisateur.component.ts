import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MairieserviceService } from '../service/mairieservice.service';
import { UtilisateurserviceService } from '../service/utilisateurservice.service';

@Component({
  selector: 'app-modifierutilisateur',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.scss']
})
export class ModifierutilisateurComponent implements OnInit {

  public utilisateurcourant : any
  public listeMairie : any

  constructor(private routeactive: ActivatedRoute, private router: Router,
              private utilisateurservice: UtilisateurserviceService , private mairieservice : MairieserviceService) { }

  ngOnInit(): void {
    this.utilisateurservice.getUtilisateurByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.utilisateurcourant=data;
     // console.log(this.regioncourant);
     }, error=>{
       console.log(error);
       
     });

     this.getListeMairie();
  }

  public getListeMairie(){
    this.mairieservice.getMairie()
    .subscribe(data =>{
      this.listeMairie=data;
    }, error=>{
      console.log(error);
      
    });
  }

 
  OnmodifierUtilisateur(donnee : any){
    let mairie = this.listeMairie.filter(element => element.idMairie == +donnee.mairie)[0]
     donnee.mairie = mairie;
      this.utilisateurservice.UpdateUtilisateur(this.routeactive.snapshot.params.id, donnee)
      .subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Utilisateur Modifier avec Success !!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/base/collapses");
       }, error=>{
         console.log(error);
         
       });
    }
  

}
