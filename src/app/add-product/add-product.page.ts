import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  providers: [
    ProductServiceService,
  ]
})
export class AddProductPage implements OnInit {
  //Search neccesary variables
  public isSearchbarOpened = false;
  private searchInput: any="";

  //Barcode Scanner
  barcodeScannerOptions : BarcodeScannerOptions = {showTorchButton:true}
  public isBarCode = true;

  //Create Product
  public product = { 
    name: "", 
    brand: "", 
    serial: 0, 
    picture: 'https://superimage.sfo2.digitaloceanspaces.com/1024px-No_image_available.svg.png', 
    price: [{
      supermarketName: "", 
      value: 0
    }]
  }

  constructor(
    private productService: ProductServiceService,
    private barcodeScanner: BarcodeScanner,
    private router: Router
    ) { }

  //Scan Barcode for search
  goToScan(){
    this.barcodeScanner.scan(this.barcodeScannerOptions).then(barcodeData => {
      this.router.navigateByUrl(`/product/${barcodeData["text"]}`)
     }).catch(err => {
         console.log('Error', err);
     });
    
  }

  //Scan Bracode for Add product
  scanToAdd(){
    this.barcodeScanner.scan(this.barcodeScannerOptions).then(barcodeData => {
      this.product.serial= +barcodeData["text"]
     }).catch(err => {
         console.log('Error', err);
     });
  }

  onSearch(){
    this.router.navigateByUrl(`/search-result/${this.searchInput}`)
    console.log(this.searchInput);
  }
  
  ngOnInit() {
  }

  public create_product() {
    this.productService.addProduct(this.product).subscribe(product => {
      console.log("result: ")
      console.log(product)
    })
    this.router.navigateByUrl("/home")
  }

}
