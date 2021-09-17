import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CercleserviceService } from '../service/cercleservice.service';
import { RegionserviceService } from '../service/regionservice.service';

@Component({
  selector: 'app-modifiercercle',
  templateUrl: './modifiercercle.component.html',
  styleUrls: ['./modifiercercle.component.scss']
})
export class ModifiercercleComponent implements OnInit {

  public cerclecourant : any;
  public listeRegion : any;

  constructor(private router: Router, private routeactive: ActivatedRoute , 
              private cercleservice: CercleserviceService , private regionservice :RegionserviceService) { }

  ngOnInit(): void {
    this.cercleservice.getCercleByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.cerclecourant=data;
      console.log(this.cerclecourant);
     }, error=>{
       console.log(error);
       
     });

     this.getListeRegion();


  }

  public getListeRegion(){
    this.regionservice.getRegion()
    .subscribe(data =>{
      this.listeRegion=data;
    }, error=>{
      console.log(error);
      
    });
  }

  OnmodifierCercle(donnee : any){
    let region = this.listeRegion.filter(element => element.idRegion == +donnee.region)[0]
     donnee.region = region;
       console.log(donnee);
      this.cercleservice.UpdateCercle(this.routeactive.snapshot.params.id, donnee)
      .subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cercle Modifier avec Success !!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/base/collapses");
       }, error=>{
         console.log(error);
         
       });
    }

}
