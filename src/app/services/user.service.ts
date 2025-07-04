import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private url = "";
  constructor(private http:HttpClient) { }

  postLogin(user: {email:string,password:string}){
    this.http.post("",user)
  }
}
