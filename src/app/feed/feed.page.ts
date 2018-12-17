import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { RouterModule, Routes} from '@angular/router'
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    ProductServiceService,
  ]
})
export class FeedPage implements OnInit {
  public isSearchbarOpened = false;
  private searchInput: any="";

  public listProducts: Array<any>;

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private productService: ProductServiceService, private router: Router) {
  }
  onSearch(){
    this.router.navigateByUrl(`/search-result/${this.searchInput}`)
    console.log(this.searchInput);
  }

  ngOnInit() {
    this.searchInput="";
    this.isSearchbarOpened = false;    
    this.productService.getProducts().subscribe(
      data=>{
        console.log(data);
        const response = (data as any);
        this.listProducts = response;
      }, error => {
        console.log(error);
      }
    )
  }

}
