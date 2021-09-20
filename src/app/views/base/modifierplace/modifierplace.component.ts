import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MarcherService } from '../service/marcher.service';
import { PlaceService } from '../service/place.service';

@Component({
  selector: 'app-modifierplace',
  templateUrl: './modifierplace.component.html',
  styleUrls: ['./modifierplace.component.scss']
})
export class ModifierplaceComponent implements OnInit {


  public placecourant : any;
  public listeMarcher : any;

  constructor(private router: Router, private routeactive: ActivatedRoute, 
             private placeservice : PlaceService ,private marcherservice : MarcherService) { }

  ngOnInit(): void {

    this.placeservice.getPlaceByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.placecourant=data;
      console.log(this.placecourant);
     }, error=>{
       console.log(error);
       
     });

     this.getListeMarcher();
  }
  public getListeMarcher(){
    this.marcherservice.getMarcher()
    .subscribe(data =>{
      this.listeMarcher=data;
    }, error=>{
      console.log(error);
      
    });
  }

  OnmodifierPlace(donnee : any){
    let marcher = this.listeMarcher.filter(element => element.idMarcher == +donnee.marcher)[0]
    donnee.marcher = marcher;
      this.placeservice.UpdatePlace(this.routeactive.snapshot.params.id, donnee)
      .subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Place Modifier avec Success !!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/base/marcher");
       }, error=>{
         console.log(error);
         
       });
    }

}
