import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegionserviceService } from '../service/regionservice.service';

@Component({
  selector: 'app-modifierregion',
  templateUrl: './modifierregion.component.html',
  styleUrls: ['./modifierregion.component.scss']
})
export class ModifierregionComponent implements OnInit {

  public regioncourant : any;
  erreur= 0;


  constructor(private regionservice: RegionserviceService, private router: Router, private routeactive: ActivatedRoute) { }

  ngOnInit(): void {

    this.regionservice.getRegionByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.regioncourant=data;
      console.log(this.regioncourant);
     }, error=>{
       console.log(error);
       
     });
  }

  OnmodifierRegion(donnee : any){
  //  let commune = this.listeCommune.filter(element => element.idCommune == +donnee.commune)[0]
   //  donnee.commune = commune;
     console.log(donnee);
    this.regionservice.UpdateRegion(this.routeactive.snapshot.params.id, donnee)
    .subscribe(data =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Region Modifier avec Success !!!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl("/base/collapses");
     }, error=>{
       console.log(error);
       
     });
  }

}
