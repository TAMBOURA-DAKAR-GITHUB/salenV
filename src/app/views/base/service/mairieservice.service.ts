import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MairieserviceService {

  public hostmairie= environment.mairieurl;
  public hostmarcher= environment.marcherurl;
  public hostplace= environment.placeurl;
  public hostplaceToMarchand= environment.placeToMarchandurl;
  public hostmarchand= environment.marchandurl;
  public hostutilisateur = environment.utilisateururl;
  public hostplaceToUtilisateur= environment.placeToUtilisateururl


  constructor(private http : HttpClient) { }

   // la methode pour ajouter une mairie
   public ajoutermairie(hostmairie: any , donnee: any){
    return this.http.post(this.hostmairie+"/addMairie", donnee);
  }

  // la liste des mairie
  getMairie(){
    return this.http.get<any>(this.hostmairie+"/listeMairie");
  }

  // supprimer une mairie
  public deleteMairie(idmairie:number){
    return this.http.delete(this.hostmairie+"/deleteById/"+idmairie);
  } 

  // recuperer la liste par url
  getMairieByUrl(idmairie:number){
    return this.http.get(this.hostmairie+"/listeById/"+idmairie);
  }
  // pour modifier une mairie
  public UpdateMairie(idmairie:number , donnee:any){
    return this.http.put(this.hostmairie+"/updateMairie/"+idmairie , donnee);
  } 

// la methode pour recuperer la liste des marchers pour une mairie donnee
getAllMarcherByMairie(idMairie: any){
  return this.http.get<any>(this.hostmarcher+"/listeMarcherById/"+idMairie);
}

// la methode pour recuperer la liste les place pour une marcher donnee
getAllPlaceByMarcher(idMarcher: any){
  return this.http.get<any>(this.hostplace+"/listePlaceByIdMarcher/"+idMarcher);
}

// la methode pour recuperer la liste des marchand  pour une marcher
getAllMarchandByMarcher(idMarcher: any){
  console.log(idMarcher)
  return this.http.get<any>(this.hostmarchand+"/listeMarhandByMarcher/"+idMarcher);
}

// la methode pour affecter les places a un marchand
public affecterPlaceToMarchand(host:any , marchand:any, place:any ){
  console.log(marchand)
  console.log(place)
   
   return this.http.post(this.hostplaceToMarchand+"/placeToMarchand" ,{"marchand":marchand, "places":place});
   
 } 

 // la methode pour recuperer la liste des utilisateur  pour une mairie donnee
getAllUtilisateurByMairie(idMairie: any){
  return this.http.get<any>(this.hostutilisateur+"/listeUtilisateurById/"+idMairie);
}


// la methode pour affecter les places a un utilisateur
public affecterPlaceToUtilisateur(host:any , utilisateur:any, place:any ){
  console.log(utilisateur)
  console.log(place)
   return this.http.post(this.hostplaceToUtilisateur+"/placeToUtilisateur" ,{"utilisateur":utilisateur, "places":place});

 } 

}
