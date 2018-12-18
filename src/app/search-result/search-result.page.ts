import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductServiceService } from '../product-service.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
  providers:[
    ProductServiceService,
  ]
})
export class SearchResultPage implements OnInit {
  private title: String;
  public isSearchbarOpened = false;
  private searchInput: any="";
  public listProducts: Array<any>;

  public items: Array<{ title: string; note: string; icon: string }> = [];

  constructor(
      private route: ActivatedRoute, 
      private productService: ProductServiceService,
      private router: Router,
      private location: Location
    ) {
  }

  //constructor(private route: ActivatedRoute) { }
  onSearch(){
    //this.router.navigateByUrl(`/search-result/${this.searchInput}`)
    this.productService.getProductsByName(this.searchInput).subscribe(
      data=>{
        console.log(data);
        const response = (data as any);
        this.listProducts = response;
      }, error => {
        this.listProducts = [];
        console.log(error);
      }
    )
    console.log(this.searchInput);
  }
  
  //Navigation Methods
  goBack(){
    this.location.back();
  }

  goHome(){
    this.router.navigateByUrl("/")
  }

  ngOnInit(){
    this.title = this.route.snapshot.paramMap.get('name')
    this.searchInput = this.title
    console.log(this.title)
    this.onSearch()
  }

  

}
