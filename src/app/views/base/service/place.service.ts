import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  public hostplace= environment.placeurl;

  constructor(private http: HttpClient) { }

    // la liste des place
    getPalce(){
      return this.http.get<any>(this.hostplace+"/listePlace");
    }

     // la methode pour ajouter une place 
   public ajouterplace(hostplace: any , donnee: any){
    return this.http.post(this.hostplace+"/addPlace", donnee);
  }

  // supprimer une place
  public deletePlace(idpalce:number){
    return this.http.delete(this.hostplace+"/deleteById/"+idpalce);
  } 

  // recuperer la liste par url
  getPlaceByUrl(idpalce:number){
    return this.http.get(this.hostplace+"/listeById/"+idpalce);
  }

    // pour modifier une place
    public UpdatePlace(idpalce:number , donnee:any){
      return this.http.put(this.hostplace+"/updatePlace/"+idpalce , donnee);
    } 
}
