import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  providers: [
    ProductServiceService,
  ]
})
export class AddProductPage implements OnInit {

  constructor(
    private productService: ProductServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  public create_product(input: any) {
    console.log("input: ")
    console.log(input)
    this.productService.addProduct(input).subscribe(product => {
      console.log("result: ")
      console.log(product)
    })
    this.router.navigateByUrl("/home")
  }

}
