import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  //Search variables
  public isSearchbarOpened = false;
  private searchInput: any="";


  constructor(
    private productService: ProductServiceService, 
    private router: Router
    ) { }

  onSearch(){
    this.router.navigateByUrl(`/search-result/${this.searchInput}`)
    console.log(this.searchInput);
  }

  ngOnInit() {
    this.searchInput="";
    this.isSearchbarOpened = false; 
  }

}
