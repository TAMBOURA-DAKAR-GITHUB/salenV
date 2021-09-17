import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { MairieserviceService } from '../service/mairieservice.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-mairie',
  templateUrl: './liste-mairie.component.html',
  styleUrls: ['./liste-mairie.component.scss']
})
export class ListeMairieComponent implements OnInit {

  @ViewChild('primaryModal') public primaryModal: ModalDirective;

  public listeMairie: any
  public actuelMairie : any
  public listeMarcherByMairie : any
  public idmarcheractuel : any
  public listePlaceByMarcher : any
  public idplaceselected : number[]=[];
  public placeToMarchand : any
  public listeMarchandByMarcher : any;
  public listePlaceByMarchand : any
  public listeUtilisateurByMarcher : any;
  public placeToUtilisateur: any;

  constructor( private mairieservice: MairieserviceService, private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.mairieservice.getMairie()
    .subscribe(data =>{
      this.listeMairie=data;
    }, error=>{
      console.log(error);
      
    });
  }

  onListeMarcher(mairie){
    this.actuelMairie=mairie.idMairie;
    this.mairieservice.getAllMarcherByMairie(mairie.idMairie)
    .subscribe(data =>{
      this.listeMarcherByMairie=data;
     }, error=>{
       console.log(error);
       
     });
  }

  onListePlaceMarchand(listemarcherbymairie : any){
    this.idmarcheractuel= listemarcherbymairie.idMarcher
    this.mairieservice.getAllPlaceByMarcher(listemarcherbymairie.idMarcher)
    .subscribe(data =>{
      this.listePlaceByMarchand=data;
      console.log( this.listePlaceByMarchand)
     }, error=>{
       console.log(error);
       
     });

  }


  onListeMarchandByMarcher(){
    this.mairieservice.getAllMarchandByMarcher(this.idmarcheractuel)
    .subscribe(data =>{
      this.listeMarchandByMarcher=data;
      console.log(this.listeMarchandByMarcher);
     }, error=>{
       console.log(error);
       
     });
  }

  getIdPlaceSelectionner(ev : any, id: number){
    if(ev.target.checked){
      console.log(id);
      this.idplaceselected.push(id);
    } else {
      this.idplaceselected= this.idplaceselected.filter(m => m!=id);
    }

    console.log(this.idplaceselected)

  }

  
  onAddPlaceToMachand(donnee : any){
    console.log(donnee);
    this.mairieservice.affecterPlaceToMarchand(this.mairieservice.hostplaceToMarchand+"/placeToMarchand", donnee.marchand , this.idplaceselected).
    subscribe(data =>{
      this.placeToMarchand=data;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Place affecter avec Success !!!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl("/base");
      console.log(this.placeToMarchand);
     }, error=>{
       console.log(error);
       
     });
  }

  
  onListePlaceUtilisateur(listemarcherbymairie : any){
    this.mairieservice.getAllPlaceByMarcher(listemarcherbymairie.idMarcher)
    .subscribe(data =>{
      this.listePlaceByMarcher=data;
     // console.log(this.listePlaceByMarcher)
     }, error=>{
       console.log(error);
       
     });

  }

  onListeUtilisateur(){
    this.mairieservice.getAllUtilisateurByMairie(this.actuelMairie)
    .subscribe(data =>{
      this.listeUtilisateurByMarcher=data;
      console.log(this.listeUtilisateurByMarcher);
     }, error=>{
       console.log(error);
       
     });

  }


  onAddPlaceToUtilisataur(donnee : any){
    this.mairieservice.affecterPlaceToUtilisateur(this.mairieservice.hostplaceToUtilisateur+"/placeToUtilisateur", donnee.utilisateur , this.idplaceselected).
    subscribe(data =>{
      this.placeToUtilisateur=data;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Place affecter avec Success !!!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl("/base");
     }, error=>{
       console.log(error);
       
     });
   // console.log(donnee.utilisateur);
   // console.log(this.idplaceselected);
    
  }


}
