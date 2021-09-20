import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MarchandService } from '../service/marchand.service';
import { MarcherService } from '../service/marcher.service';

@Component({
  selector: 'app-modifiermarchand',
  templateUrl: './modifiermarchand.component.html',
  styleUrls: ['./modifiermarchand.component.scss']
})
export class ModifiermarchandComponent implements OnInit {

  public marchandcourant : any;
  public listeMarcher : any;

  constructor(private router: Router, private routeactive: ActivatedRoute,
              private marchandservice : MarchandService ,private marcherservice: MarcherService) { }

  ngOnInit(): void {

    this.marchandservice.getMarchandByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.marchandcourant=data;
      console.log(this.marchandcourant);
     }, error=>{
       console.log(error);
       
     });

     this.getListeMarchar();

  }

  public getListeMarchar(){
    this.marcherservice.getMarcher()
    .subscribe(data =>{
      this.listeMarcher=data;
    }, error=>{
      console.log(error);
      
    });
  }

   
  OnmodifierMarchand(donnee : any){
    let marcher = this.listeMarcher.filter(element => element.idMarcher == +donnee.marcher)[0]
       donnee.marcher = marcher;
      this.marchandservice.UpdateMarchand(this.routeactive.snapshot.params.id, donnee)
      .subscribe(data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Marchand Modifier avec Success !!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/base/marcher");
       }, error=>{
         console.log(error);
         
       });
    }

}
