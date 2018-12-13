import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  private productSerial: any;
  private product: any;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
    ) { }

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