import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { ShoppingListService } from '../shopping-list.service';
import {List} from '@ionic/angular';
import { async } from 'q';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  providers: [ 
    ProductServiceService, 
  ]
})





export class ProductPage implements OnInit {
  //Product informacion variables
  private productSerial: any;
  public product: any;
  //Search neccesary variables
  public isSearchbarOpened = false;
  private searchInput: any="";

  @ViewChild('slidingList') slidingList: List;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router,
    public shoppingService: ShoppingListService
    ) { }

  onSearch(){
    this.router.navigateByUrl(`/search-result/${this.searchInput}`)
    console.log(this.searchInput);
  }

  async delete() {
   // something
   await this.slidingList.closeSlidingItems();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.delete();
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  add(input: any){
    console.log(input)
    this.shoppingService.addToCart(input)
    console.log(this.shoppingService.GlobalShoppingList)
  }

  

  ngOnInit(){
    this.productSerial = this.route.snapshot.paramMap.get('id');
    console.log(this.productSerial);
    this.productService.getProductBySerial(this.productSerial).subscribe(
      data=>{
        console.log(data);
        const response = (data as any);
        this.product = response[0];
      }, error => {
        console.log(error);
      }
    )
  }

}