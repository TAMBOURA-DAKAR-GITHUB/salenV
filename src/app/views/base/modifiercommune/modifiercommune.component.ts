import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CercleserviceService } from '../service/cercleservice.service';
import { CommuneserviceService } from '../service/communeservice.service';

@Component({
  selector: 'app-modifiercommune',
  templateUrl: './modifiercommune.component.html',
  styleUrls: ['./modifiercommune.component.scss']
})
export class ModifiercommuneComponent implements OnInit {

  public communecourant : any;
  public listeCercle : any;

  constructor(private router: Router, private routeactive: ActivatedRoute,
             private communeservice : CommuneserviceService ,private cercleservice: CercleserviceService) { }

  ngOnInit(): void {
    this.communeservice.getCommuneByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.communecourant=data;
      console.log(this.communecourant);
     }, error=>{
       console.log(error);
       
     });

     this.getListeCercle();

  }
  public getListeCercle(){
    this.cercleservice.getCercle()
    .subscribe(data =>{
      this.listeCercle=data;
    }, error=>{
      console.log(error);
      
    });
  }


  OnmodifierCommune(donnee : any){
    let cercle = this.listeCercle.filter(element => element.idCercle == +donnee.cercle)[0]
    console.log(cercle)
     donnee.cercle = cercle;
      this.communeservice.UpdateCommune(this.routeactive.snapshot.params.id, donnee)
      .subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Commune Modifier avec Success !!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/base/collapses");
       }, error=>{
         console.log(error);
         
       });
    }


}
