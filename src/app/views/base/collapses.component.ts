import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CercleserviceService } from './service/cercleservice.service';
import { CommuneserviceService } from './service/communeservice.service';
import { MairieserviceService } from './service/mairieservice.service';
import { RegionserviceService } from './service/regionservice.service';
import { UtilisateurserviceService } from './service/utilisateurservice.service';

@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent implements OnInit{

  constructor(private regionservice: RegionserviceService , private router: Router ,
              private cercleservice: CercleserviceService , private communeservice: CommuneserviceService,
              private mairieservice: MairieserviceService , private utilisateurservice : UtilisateurserviceService) { }

  erreur= 0;
  public listeRegion : any []=[];
  public listeCercle : any 
  public listeCommune : any 
  public listeMairie : any
  public listeUtilisateur : any
  p : number = 1;



  isCollapsed: boolean = true;
  isCollapsed1: boolean = true;

  isCollapsedregion: boolean = true;
  isCollapsedcercle: boolean = true;
  isCollapsedcommune: boolean = true;
  isCollapsedmairie: boolean = true;
  isCollapsedrecouvreur: boolean = true;


  //==================================================================Region=====================================================================================================
  ngOnInit(): void {
    // ***************liste Region ********
    this.regionservice.getRegion()
    .subscribe(data =>{
      this.listeRegion=data;
    }, error=>{
      console.log(error);
      
    });

    // ************liste cercle ***********
    this.cercleservice.getCercle()
    .subscribe(data =>{
      this.listeCercle=data;
    }, error=>{
      console.log(error);
      
    });
  
    // *********************liste commune ****************
    this.communeservice.getCommune()
    .subscribe(data =>{
      this.listeCommune=data;
    }, error=>{
      console.log(error);
      
    });
     // *********************liste mairie ****************
     this.mairieservice.getMairie()
     .subscribe(data =>{
       this.listeMairie=data;
     }, error=>{
       console.log(error);
       
     });
     // *********************liste utilisateur ****************
     this.utilisateurservice.getUtilisateur()
     .subscribe(data =>{
       this.listeUtilisateur=data;
     }, error=>{
       console.log(error);
       
     });
  } 

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  onAddRegion(donnee : any){
    console.log(donnee)
    this.regionservice.ajouterregion(this.regionservice.hostregion+"/addRegion", donnee).
    subscribe(data =>{
    this.ngOnInit();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'une Region a ete ajouter',
      showConfirmButton: false,
      timer: 1500
    })
      
      console.log(data);
     }, (error)=>{
      console.log(error.error);
      Swal.fire('Region ', 'La Region Existe deja !!!', 'error');
       
     });
  

  }

  onDelete(region:any){
    let confirmation = confirm("Etes Vous Sure !!!!");
    if(confirmation){
      this.regionservice.deleteRegion(region.idRegion)
      .subscribe(data =>{
       this.ngOnInit();
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Region Supprimer',
        showConfirmButton: false,
        timer: 1500
      })
      }, error=>{
        Swal.fire('Region ', 'Nous avons rencontre un probleme', 'error');
        console.log(error);
        
      });
    }
  }

  onUpdate(region:any){
    let id=region.idRegion
    this.router.navigateByUrl("modifierregion/"+ id);
    console.log(btoa(id))

  }
  //********************************************************************Cercle***************************************************************** 

  onAddCercle(donnee){
    console.log(donnee)
    let region = this.listeRegion.filter(element => element.idRegion == +donnee.region)[0]
    console.log(region)
     donnee.region = region;
    
    this.cercleservice.ajoutercercle(this.cercleservice.hostcercle+"/addCercle", donnee).
    subscribe(data =>{
    this.ngOnInit();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'un cercle a ete ajouter',
      showConfirmButton: false,
      timer: 1500
    })
      
      console.log(data);
     }, (error)=>{
      console.log(error.error);
      Swal.fire('Cercle ', 'le cercle existe deja !!!', 'error');
       
     });

  }

  onUpdateCercle(listecercle : any){
    let id=listecercle.idCercle
    this.router.navigateByUrl("modifiercercle/"+ id);
    console.log(btoa(id))

  }

  onDeleteCercle(listecercle: any){
      let confirmation = confirm("Etes Vous Sure !!!!");
      if(confirmation){
        this.cercleservice.deleteCercle(listecercle.idCercle)
        .subscribe(data =>{
         this.ngOnInit();
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cercle Supprimer',
          showConfirmButton: false,
          timer: 1500
        })
        }, error=>{
          Swal.fire('Cercle ', 'Nous avons rencontre un probleme', 'error');
          console.log(error);
          
        });
      }
    }

//============================================================commune==============================================================

onAddCommune(donnee){
  console.log(donnee)
  let cercle = this.listeCercle.filter(element => element.idCercle == +donnee.cercle)[0]
  console.log(cercle)
   donnee.cercle = cercle;
  
  this.communeservice.ajoutercommune(this.communeservice.ajoutercommune+"/addCommune", donnee).
  subscribe(data =>{
  this.ngOnInit();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'un cercle a ete ajouter',
    showConfirmButton: false,
    timer: 1500
  })
    
    console.log(data);
   }, (error)=>{
    console.log(error.error);
    Swal.fire('Commune ', 'La commune existe deja !!!', 'error');
     
   });
}

onUpdateCommune(listecommune){
  let id=listecommune.idCommune
  this.router.navigateByUrl("modifiercommune/"+ id);
  console.log(btoa(id))

}

onDeleteCommune(listecommune: any){
    let confirmation = confirm("Etes Vous Sure !!!!");
    if(confirmation){
      this.communeservice.deleteCommune(listecommune.idCommune)
      .subscribe(data =>{
       this.ngOnInit();
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Commune Supprimer',
        showConfirmButton: false,
        timer: 1500
      })
      }, error=>{
        Swal.fire('Commune ', 'Nous avons rencontre un probleme', 'error');
        console.log(error);
        
      });
    }
}

//====================================================================Mairie===========================================================
onAddMairie(donnee){

  let commune = this.listeCommune.filter(element => element.idCommune == +donnee.commune)[0]
  console.log(commune)
   donnee.commune = commune;
  this.mairieservice.ajoutermairie(this.communeservice.ajoutercommune+"/addMairie", donnee).
  subscribe(data =>{
  this.ngOnInit();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'une mairie a ete ajouter',
    showConfirmButton: false,
    timer: 1500
  })
    
    console.log(data);
   }, (error)=>{
    console.log(error.error);
    Swal.fire('Commune ', 'La mairie existe deja !!!', 'error');
     
   });

}

onUpdateMairie(listemairie : any){
  let id=listemairie.idMairie
  this.router.navigateByUrl("modifiermairie/"+ id);
  console.log(btoa(id))
}

onDeleteMairie(listemairie){

  let confirmation = confirm("Etes Vous Sure !!!!");
  if(confirmation){
    this.mairieservice.deleteMairie(listemairie.idMairie)
    .subscribe(data =>{
     this.ngOnInit();
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Mairie Supprimer',
      showConfirmButton: false,
      timer: 1500
    })
    }, error=>{
      Swal.fire('Mairie ', 'Nous avons rencontre un probleme', 'error');
      console.log(error);
      
    });
  }

}

//======================================================================= Utilisateur ===============================================================

onAddUtilisateur(donnee : any){
  let mairie = this.listeMairie.filter(element => element.idMairie == +donnee.mairie)[0]
  console.log(mairie)
   donnee.mairie = mairie;
  this.utilisateurservice.ajouterutilisateur(this.utilisateurservice.ajouterutilisateur+"/addUtilisateur", donnee).
  subscribe(data =>{
  this.ngOnInit();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'un utilisateur a ete ajouter',
    showConfirmButton: false,
    timer: 1500
  })
    
    console.log(data);
   }, (error)=>{
    console.log(error.error);
    Swal.fire('Utilisateur ', 'Utilisateur existe deja !!!', 'error');
     
   });
}
onUpdateUtilisateur(utilisateur){
  let id=utilisateur.idUtilisateur
  this.router.navigateByUrl("modifierutilisateur/"+ id);
 // console.log(btoa(id))
}
onDeleteUtilisateur(utilisateur){
  let confirmation = confirm("Etes Vous Sure !!!!");
  if(confirmation){
    this.mairieservice.deleteMairie(utilisateur.idUtilisateur)
    .subscribe(data =>{
     this.ngOnInit();
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Utilisateur Supprimer',
      showConfirmButton: false,
      timer: 1500
    })
    }, error=>{
      Swal.fire('Utilisateur ', 'Nous avons rencontre un probleme', 'error');
      console.log(error);
      
    });
  }
}
}
