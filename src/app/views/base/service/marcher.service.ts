import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcherService {

  public hostmarcher= environment.marcherurl;

  constructor(private http: HttpClient) { }

    // la liste des communes
    getMarcher(){
      return this.http.get<any>(this.hostmarcher+"/listeMarcher");
    }
}
