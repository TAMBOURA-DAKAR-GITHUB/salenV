import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommuneserviceService {

  public hostcommune= environment.communeurl;

  constructor(private http: HttpClient) { }

  // la methode pour ajouter une commune
   public ajoutercommune(hostcommune: any , donnee: any){
    return this.http.post(this.hostcommune+"/addCommune", donnee);
  }

  // la liste des communes
  getCommune(){
    return this.http.get<any>(this.hostcommune+"/listeCommune");
  }

  // supprimer une commune
  public deleteCommune(idcommune:number){
    return this.http.delete(this.hostcommune+"/deleteById/"+idcommune);
  } 

  // recuperer la liste par url
  getCommuneByUrl(idcommune:number){
    return this.http.get(this.hostcommune+"/listeById/"+idcommune);
  }
  // pour modifier une commune
  public UpdateCommune(idcommune:number , donnee:any){
    return this.http.put(this.hostcommune+"/updateCommune/"+idcommune , donnee);
  } 
}
