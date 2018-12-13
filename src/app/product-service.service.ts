import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http: HttpClient) {
    
  }
  
  getProducts(){
     return this.http.get("http://localhost:3000/product")
  }

  getProductBySerial(id: number){
    return this.http.get(`http://localhost:3000/product/serial/${id}`) 
  }

  addProduct(product){
    return this.http.post(`http://localhost:3000/product/`, product) 
  }
    
  getProductsByName(name: String){
    return this.http.get(`http://localhost:3000/product/name/${name}`)
  }
  
}
  