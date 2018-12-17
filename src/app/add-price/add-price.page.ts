import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  private productID: String;
  private productSerial: String;

  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute
    ) { }

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
