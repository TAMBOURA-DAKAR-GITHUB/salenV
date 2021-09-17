import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  public host= environment.payementurl;

  constructor(private http: HttpClient) { }

  
  // la methode pour recuperer la liste des marchands par utilisateur
  getAllMarchandByUtilisateur(idutilisateur: number){
    return this.http.get(this.host+"/listeMarchandByUtilisateur/"+idutilisateur);
 }

// la methode pour recuperer la liste des places par marchand 
 getAllPlaceByMarchand(idMarchand: number){
  return this.http.get(this.host+"/listePlaceByMarchand/"+idMarchand);
}


// la methode pour affecter les places a un utilisateur
public addPayement(host:any , marchand: any,  utilisateur:any, place:any ){
  console.log(utilisateur)
  console.log(place)
  console.log(marchand)
  // let montantdonne= donnee.montant
  // let dateP= donnee.datePayement
   
   return this.http.post(this.host+"/addPayement" ,{"marchand":marchand, "utilisateur":utilisateur, "places":place});
   
 } 

   // 
   getFacture(idMarchand:number ,idUtilisateur:number){
     console.log(idMarchand , idUtilisateur)
    return this.http.get(this.host+"/factures/"+idMarchand+"/"+idUtilisateur);
  }

  getAll(){
    console.log("test ........");
  }
}
