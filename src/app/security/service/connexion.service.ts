import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../model/role';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  apiURL: string = 'http://localhost:9012/login';

  // users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
  //                 {"username":"nadhem","password":"123","roles":['USER']} ];

public loggedUser:any;
public isloggedIn: Boolean = false;
public roles:Role[]=[];
public iduser : number;

  constructor(private router: Router , private http: HttpClient) { }

  
  getUserFromDB(username: string): Observable<User> {
    const url = `${this.apiURL}/${username}`;
    return this.http.get<User>(url);
  }

 // getUserFromDB(username: string){
   // return this.http.get<User>(this.apiURL+"/username");
  //}


  logout() { 
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = [];
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }


  SignIn(user :User){
    this.loggedUser = user.username;
    this.isloggedIn = true;
    this.roles = user.roles;
    this.iduser= user.user_id
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }

  // SignIn(user :User):Boolean{

  //   let validUser: Boolean = false;
    
  //   this.users.forEach((curUser) => {
  //     if(user.username=== curUser.username && user.password==curUser.password) {
  //       validUser = true;
  //       this.loggedUser = curUser.username;
  //       this.isloggedIn = true;
  //       this.roles = curUser.roles;
  //       localStorage.setItem('loggedUser',this.loggedUser);
  //       localStorage.setItem('isloggedIn',String(this.isloggedIn));
  //     }
  //   });

  //    return validUser;
  // }

  isAdmin(): Boolean {
    let admin: Boolean = false;
    if (!this.roles) //this.roles== undefiened
      return false;
    this.roles.forEach((curRole) => {
      if (curRole.role == 'ADMIN') {
        admin = true;
      }
    });
    return admin;
  }
  // isAdmin():Boolean{
  //   if (!this.roles) //this.roles== undefiened
  //      return false;
  //   return (this.roles.indexOf('ADMIN') >-1);
   
  // }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username :string){
    this.getUserFromDB(username).subscribe((user: User)=>{
    this.roles = user.roles;
    });
    }

  // getUserRoles(username :string){    
  //   this.users.forEach((curUser) => {
  //     if( curUser.username == username) {
  //         this.roles = curUser.roles;
  //     }
  //   });
  // }
}
