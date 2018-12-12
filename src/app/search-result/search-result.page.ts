import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
  providers:[
    ProductServiceService,
  ]
})
export class SearchResultPage implements OnInit {
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  private title: String;
  public isSearchbarOpened = false;
  public listProducts: Array<any>;

  public items: Array<{ title: string; note: string; icon: string }> = [];

  constructor(private route: ActivatedRoute, private productService: ProductServiceService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'gato ' + i,
        note: 'This is Sparta #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  //constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.title = this.route.snapshot.paramMap.get('name')
    this.productService.getProductsByName(this.title).subscribe(
      data=>{
        const response = (data as any);
        const objReturn = JSON.parse(response._body);
        this.listProducts = JSON.parse(response._body);
        console.log(objReturn);
      }, error => {
        console.log(error);
      }
    )
  }

  

}
