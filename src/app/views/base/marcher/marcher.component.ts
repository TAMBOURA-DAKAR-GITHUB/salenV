import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MairieserviceService } from '../service/mairieservice.service';
import { MarchandService } from '../service/marchand.service';
import { MarcherService } from '../service/marcher.service';
import { PlaceService } from '../service/place.service';

@Component({
  selector: 'app-marcher',
  templateUrl: './marcher.component.html',
  styleUrls: ['./marcher.component.scss']
})
export class MarcherComponent implements OnInit {

  

  isCollapsedmarcher: boolean = true;
  isCollapsedmarchand: boolean = true;
  isCollapsedplace: boolean = true;

  public listeMarcher : any;
  public listeMairie : any;
  public listeMarchand :any;
  public listePlace : any;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  constructor(private marcherservice: MarcherService, private mairieservice: MairieserviceService , private router: Router,
             private marchandservice: MarchandService , private placeservice: PlaceService) { }

  ngOnInit(): void {

     // ***************liste marcher ********
     this.marcherservice.getMarcher()
     .subscribe(data =>{
       this.listeMarcher=data;
       console.log(this.listeMarcher)
     }, error=>{
       console.log(error);
       
     });
      // ***************liste mairie ********
     this.mairieservice.getMairie()
     .subscribe(data =>{
       this.listeMairie=data;
       console.log(this.listeMairie)
     }, error=>{
       console.log(error);
       
     });
     // ***************liste marchand ********
     this.marchandservice.getMarchand()
     .subscribe(data =>{
       this.listeMarchand=data;
       console.log(this.listeMarchand)
     }, error=>{
       console.log(error);
       
     });
     // ***************liste place ********
     this.placeservice.getPalce()
     .subscribe(data =>{
       this.listePlace=data;
       console.log(this.listePlace)
     }, error=>{
       console.log(error);
       
     });
  }

  onAddMarcher(donnee : any){
    console.log(donnee)
    let mairie = this.listeMairie.filter(element => element.idMairie == +donnee.mairie)[0]
    console.log("============== id "+mairie)
   donnee.mairie = mairie;
    this.marcherservice.ajoutermarcher(this.marcherservice.hostmarcher+"/addMarcher", donnee).
    subscribe(data =>{
    this.ngOnInit();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'un marcher a ete ajouter',
      showConfirmButton: false,
      timer: 1500
    })
      
      console.log(data);
     }, (error)=>{
      console.log(error.error);
      Swal.fire('Marcher ', 'Le marcher Existe deja !!!', 'error');
       
     });
  
  }

   onDeleteMarcher(listemarcher){

    let confirmation = confirm("Etes Vous Sure !!!!");
    if(confirmation){
      this.marcherservice.deleteMarcher(listemarcher.idMarcher)
      .subscribe(data =>{
       this.ngOnInit();
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Marcher Supprimer',
        showConfirmButton: false,
        timer: 1500
      })
      }, error=>{
        Swal.fire('Marcher ', 'Nous avons rencontre un probleme', 'error');
        console.log(error);
        
      });
    }

  }

  onUpdateMarcher(listemarcher){
    let id=listemarcher.idMarcher
    this.router.navigateByUrl("modifiermarcher/"+ id);
    //console.log(btoa(id))
  }

  // ==================================================================marchand=============================================================

  onAddMarchand(donnee : any){
      let marcher = this.listeMarcher.filter(element => element.idMarcher == +donnee.marcher)[0]
       donnee.marcher = marcher;
      this.marchandservice.ajoutermarchand(this.marchandservice.hostmarchand+"/addMarhand", donnee).
      subscribe(data =>{
      this.ngOnInit();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'une marchand a ete ajouter',
        showConfirmButton: false,
        timer: 1500
      })
        
        console.log(data);
       }, (error)=>{
        console.log(error.error);
        Swal.fire('Marchand ', 'Le marchand Existe deja !!!', 'error');
         
       });
    
    }
    onUpdateMarchand(listemarchand){
      let id=listemarchand.idMarchand
      this.router.navigateByUrl("modifiermarchand/"+ id);
      //console.log(btoa(id))
    }

    onDeleteMarchand(listemarchand){
      let confirmation = confirm("Etes Vous Sure !!!!");
      if(confirmation){
        this.marchandservice.deleteMarchand(listemarchand.idMarchand)
        .subscribe(data =>{
         this.ngOnInit();
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Marchand Supprimer',
          showConfirmButton: false,
          timer: 1500
        })
        }, error=>{
          Swal.fire('Marchand ', 'Nous avons rencontre un probleme', 'error');
          console.log(error);
          
        });
      }

    }

    // ========================================================== place ==========================================================
    onAddPlace(donnee: any){
      let marcher = this.listeMarcher.filter(element => element.idMarcher == +donnee.marcher)[0]
       donnee.marcher = marcher;
      this.placeservice.ajouterplace(this.placeservice.hostplace+"/addPlace", donnee).
      subscribe(data =>{
      this.ngOnInit();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'une Place a ete ajouter',
        showConfirmButton: false,
        timer: 1500
      })
        
        console.log(data);
       }, (error)=>{
        console.log(error.error);
        Swal.fire('Place ', 'Le marchand Existe deja !!!', 'error');
         
       });
    }

    onUpdatePlace(listeplace){
      let id=listeplace.idPlace
      this.router.navigateByUrl("modifierplace/"+ id);
      //console.log(btoa(id))

    }
    onDeletePlace(listeplace){
      let confirmation = confirm("Etes Vous Sure !!!!");
      if(confirmation){
        this.placeservice.deletePlace(listeplace.idPlace)
        .subscribe(data =>{
         this.ngOnInit();
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Place Supprimer',
          showConfirmButton: false,
          timer: 1500
        })
        }, error=>{
          Swal.fire('Place ', 'Nous avons rencontre un probleme', 'error');
          console.log(error);
          
        });
      }
    }

}
