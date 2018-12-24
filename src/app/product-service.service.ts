import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http: HttpClient) {
    
  }
  
  getProducts(){
     return this.http.get("http://165.227.19.176:3000/product")
  }

  getProductBySerial(id: number){
    return this.http.get(`http://165.227.19.176:3000/product/serial/${id}`) 
  }

  addProduct(product){
    return this.http.post(`http://165.227.19.176:3000/product/`, product)
  }

  addPrice(productID, data){
    return this.http.put(`http://165.227.19.176:3000/product/add-price/${productID}`, data) 
  }

  getProductsByName(name: String){
    return this.http.get(`http://165.227.19.176:3000/product/name/${name}`)
  }
  
}
  