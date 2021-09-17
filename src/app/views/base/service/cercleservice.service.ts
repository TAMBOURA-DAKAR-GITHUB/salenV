import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CercleserviceService {

  
  public hostcercle= environment.cercleurl;

  constructor(private http: HttpClient) { }

   // la methode pour ajouter un cercle
   public ajoutercercle(hostcercle: any , donnee: any){
    return this.http.post(this.hostcercle+"/addCercle", donnee);
  }

  // la liste des cercle
  getCercle(){
    return this.http.get<any>(this.hostcercle+"/listeCercle");
  }

  // supprimer un cercle
  public deleteCercle(idCercle:number){
    return this.http.delete(this.hostcercle+"/deleteById/"+idCercle);
  } 

  // recuperer la liste par url
  getCercleByUrl(idCercle:number){
    return this.http.get(this.hostcercle+"/listeById/"+idCercle);
  }
  // pour modifier un cercle
  public UpdateCercle(idCercle:number , donnee:any){
    return this.http.put(this.hostcercle+"/updateCercle/"+idCercle , donnee);
  } 

}
