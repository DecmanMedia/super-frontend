import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { RouterModule, Routes} from '@angular/router'
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [ 
    ProductServiceService, 
  ]
})
export class FeedPage implements OnInit {private selectedItem: any;
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
  
  public isSearchbarOpened = false;


  public listProducts: Array<any>;



  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private productService: ProductServiceService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'item' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
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
