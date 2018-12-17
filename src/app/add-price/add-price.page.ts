import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.page.html',
  styleUrls: ['./add-price.page.scss'],
  providers: [
    ProductServiceService,
  ]
})
export class AddPricePage implements OnInit {
  //Search Variables
  public isSearchbarOpened = false;
  private searchInput: any="";
  //Product Varibles
  private productID: String;
  private productSerial: String;

  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  onSearch(){
    this.router.navigateByUrl(`/search-result/${this.searchInput}`)
    console.log(this.searchInput);
  }
  
  ngOnInit() {
    this.productID = this.route.snapshot.paramMap.get('id');
    this.productSerial = this.route.snapshot.paramMap.get('serial');
  }

  public add_price(input: any) {
    console.log("input: ")
    console.log(input)
    this.productService.addPrice(this.productID, input).subscribe(product => {
      console.log("result: ")
      console.log(product)
    })
  }

}
