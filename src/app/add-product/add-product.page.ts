import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  public noImagreURL = "https://superimage.sfo2.digitaloceanspaces.com/1024px-No_image_available.svg.png";

  @Input() productData = { 
    name:'', 
    brand: '', 
    serial: 0,
    picture: this.noImagreURL,
    price: [{
      supermarketName: '',
      value: 0
    }]};

  constructor() { }

  ngOnInit() {
  }

  add(product:any){
    console.log(product);
  }
  test(value: any){
    console.log(value);
  }
}

