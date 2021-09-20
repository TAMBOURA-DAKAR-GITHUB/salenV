import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarchandService {

  public hostmarchand= environment.marchandurl;

  constructor(private http: HttpClient) { }

    // la liste des marchand
    getMarchand(){
      return this.http.get<any>(this.hostmarchand+"/listeMarhand");
    }

     // la methode pour ajouter un marchand 
   public ajoutermarchand(hostmairie: any , donnee: any){
    return this.http.post(this.hostmarchand+"/addMarhand", donnee);
  }

  // supprimer un marchand
  public deleteMarchand(idmarchand:number){
    return this.http.delete(this.hostmarchand+"/deleteById/"+idmarchand);
  } 

  // recuperer la liste par url
  getMarchandByUrl(idmarchand:number){
    return this.http.get(this.hostmarchand+"/listeById/"+idmarchand);
  }

    // pour modifier un marchand
    public UpdateMarchand(idmarchand:number , donnee:any){
      return this.http.put(this.hostmarchand+"/updateMarhand/"+idmarchand , donnee);
    } 
}
