import { Injectable } from '@angular/core';
import { Http }  from '@angular/Http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http: Http) {
    
  }
  
  getProducts(){
     return this.http.get("http://localhost:3000/product")
  }

  getProductBySerial(id: number){
    return this.http.get(`http://localhost:3000/product/serial/${id}`) 
  }

  getProductsByName(name: String){
    return this.http.get(`http://localhost:3000/product/name/${name}`) 
  }
  
}
  