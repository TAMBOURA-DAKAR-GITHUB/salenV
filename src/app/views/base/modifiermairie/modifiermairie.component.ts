import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommuneserviceService } from '../service/communeservice.service';
import { MairieserviceService } from '../service/mairieservice.service';

@Component({
  selector: 'app-modifiermairie',
  templateUrl: './modifiermairie.component.html',
  styleUrls: ['./modifiermairie.component.scss']
})
export class ModifiermairieComponent implements OnInit {

public mairiecourant : any
public listeCommune : any

  constructor(private router: Router, private routeactive: ActivatedRoute, 
             private mairieservice: MairieserviceService , private communeservice: CommuneserviceService) { }

  ngOnInit(): void {

    this.mairieservice.getMairieByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.mairiecourant=data;
      console.log(this.mairiecourant);
     }, error=>{
       console.log(error);
       
     });

     this.getListeCommune();
  }

  public getListeCommune(){
    this.communeservice.getCommune()
    .subscribe(data =>{
      this.listeCommune=data;
    }, error=>{
      console.log(error);
      
    });
  }

  
  OnmodifierMairie(donnee : any){
    let commune = this.listeCommune.filter(element => element.idCommune == +donnee.commune)[0]
    console.log(commune)
     donnee.commune = commune;
      this.mairieservice.UpdateMairie(this.routeactive.snapshot.params.id, donnee)
      .subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Mairie Modifier avec Success !!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/base/collapses");
       }, error=>{
         console.log(error);
         
       });
    }

}
