import { Injectable } from '@angular/core';
import { ProductPage } from './product/product.page';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  public GlobalShoppingList : Array<any> = [];


  constructor(private storage: Storage) { 
    this.storage.get('cartList').then((val) => {
      console.log('Your age is', val);
      this.GlobalShoppingList = val;
    });
  }


  addToCart(product){

    this.updateLocalCart();

    if(!this.GlobalShoppingList.includes(product)){
      this.GlobalShoppingList.push(product)
      this.storage.set('cartList',this.GlobalShoppingList)
        
    }
  }

  updateLocalCart(){
    this.storage.get('cartList').then((val) => {
      console.log('Your age is', val);
      if(val==null){
        this.storage.set('cartList',[]);
        this.GlobalShoppingList = [];
      }else{
        this.GlobalShoppingList = val;
      }
      
    });
  }

  setCart(){

  }

  cleanList(){
    this.storage.remove('cartList');
    this.GlobalShoppingList = [];
  }
}
