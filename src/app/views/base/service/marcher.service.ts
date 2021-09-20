import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcherService {

  public hostmarcher= environment.marcherurl;

  constructor(private http: HttpClient) { }

    // la liste des marchers
    getMarcher(){
      return this.http.get<any>(this.hostmarcher+"/listeMarcher");
    }

     // la methode pour ajouter une marcher
   public ajoutermarcher(hostmairie: any , donnee: any){
    return this.http.post(this.hostmarcher+"/addMarcher", donnee);
  }

  // supprimer une marcher
  public deleteMarcher(idmarcher:number){
    return this.http.delete(this.hostmarcher+"/deleteById/"+idmarcher);
  } 

  // recuperer la liste par url
  getMarcherByUrl(idmarcher:number){
    return this.http.get(this.hostmarcher+"/listeById/"+idmarcher);
  }

    // pour modifier une marrcher
    public UpdateMarcher(idmairie:number , donnee:any){
      return this.http.put(this.hostmarcher+"/updateMarher/"+idmairie , donnee);
    } 

}
