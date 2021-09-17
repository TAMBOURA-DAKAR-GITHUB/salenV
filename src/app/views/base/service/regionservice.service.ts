import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionserviceService {

  public hostregion= environment.regionurl;

  constructor(private http: HttpClient) { }

  // la methode pour ajouter une region
  public ajouterregion(hostregion: any , donnee: any){
    return this.http.post(this.hostregion+"/addRegion", donnee);
  }

  // la liste des regions
  getRegion(){
    return this.http.get<any>(this.hostregion+"/listeRegions");
  }

  // supprimer une region
  public deleteRegion(idRegion:number){
    return this.http.delete(this.hostregion+"/deleteById/"+idRegion);
  } 

  // recuperer la liste par url
  getRegionByUrl(idRegion:number){
    return this.http.get(this.hostregion+"/listeById/"+idRegion);
  }

  // pour modifier une region
  public UpdateRegion(idRegion:number , donnee:any){
    return this.http.put(this.hostregion+"/updateRegion/"+idRegion , donnee);
  } 
  
 
}
