import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

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
  private product: any;
  //Search neccesary variables
  public isSearchbarOpened = false;
  private searchInput: any="";


  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
    ) { }

  onSearch(){
    this.router.navigateByUrl(`/search-result/${this.searchInput}`)
    console.log(this.searchInput);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
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