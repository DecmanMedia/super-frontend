import { Injectable } from '@angular/core';
import { ProductPage } from './product/product.page';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public shoppingList : Array<any>;

  constructor() { }

  addToCart(product){
    if(!this.shoppingList.includes(product)){
      this.shoppingList.push(product)
    }
  }
}
