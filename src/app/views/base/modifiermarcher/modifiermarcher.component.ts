import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MairieserviceService } from '../service/mairieservice.service';
import { MarcherService } from '../service/marcher.service';

@Component({
  selector: 'app-modifiermarcher',
  templateUrl: './modifiermarcher.component.html',
  styleUrls: ['./modifiermarcher.component.scss']
})
export class ModifiermarcherComponent implements OnInit {


  public marchercourant :any;
  public listeMairie : any;

  constructor( private router: Router, private routeactive: ActivatedRoute,
             private marcherservice: MarcherService , private mairieservice : MairieserviceService ) { }

  ngOnInit(): void {

    this.marcherservice.getMarcherByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.marchercourant=data;
      console.log(this.marchercourant);
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

   
  OnmodifierMarcher(donnee : any){
    let mairie = this.listeMairie.filter(element => element.idMairie == +donnee.mairie)[0]
    console.log(mairie)
     donnee.mairie = mairie;
      this.marcherservice.UpdateMarcher(this.routeactive.snapshot.params.id, donnee)
      .subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Marcher Modifier avec Success !!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/base/marcher");
       }, error=>{
         console.log(error);
         
       });
    }

}
