import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {

  constructor(public http: HttpClient) { }

  getSupermarkets(){
    return this.http.get("http://165.227.19.176:3000/supermarket")
  }

  getSupermarketLogo(name: String){
    return this.http.get(`http://165.227.19.176:3000/supermarket/logo/${name}`)
  }

  getSupermarketByName(name: String){
    return this.http.get(`http://165.227.19.176:3000/supermarket/name/${name}`)
  }
}
