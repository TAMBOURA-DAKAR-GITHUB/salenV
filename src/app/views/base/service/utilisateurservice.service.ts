import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurserviceService {

  
  public hostutilisateur= environment.utilisateururl;

  constructor(private http: HttpClient) { }

   // la methode pour ajouter une commune
   public ajouterutilisateur(hostutilisateur: any , donnee: any){
    return this.http.post(this.hostutilisateur+"/addUtilisateur", donnee);
  }

  // la liste des communes
  getUtilisateur(){
    return this.http.get<any>(this.hostutilisateur+"/listeUtilisateur");
  }

  // supprimer une commune
  public deleteUtilisateur(idutilisateur:number){
    return this.http.delete(this.hostutilisateur+"/deleteById/"+idutilisateur);
  } 

  // recuperer la liste par url
  getUtilisateurByUrl(idutilisateur:number){
    return this.http.get(this.hostutilisateur+"/listeById/"+idutilisateur);
  }
  public UpdateUtilisateur(idutilisateur:number , donnee:any){
    return this.http.put(this.hostutilisateur+"/updateUtilisateur/"+idutilisateur , donnee);
  } 
}
