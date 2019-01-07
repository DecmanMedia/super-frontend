import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { RouterModule, Routes} from '@angular/router'
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    ProductServiceService,
  ]
})
export class FeedPage implements OnInit {
  //Search variables
  public isSearchbarOpened = false;
  private searchInput: any="";

  scannedData : any = "";


  public listProducts: Array<any>;

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
    private productService: ProductServiceService, 
    private router: Router,
    private barcodeScanner: BarcodeScanner) {
  }
  onSearch(){
    this.router.navigateByUrl(`/search-result/${this.searchInput}`)
    console.log(this.searchInput);
  }
  //Scan Barcode for search
  goToScan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.router.navigateByUrl(`/product/${barcodeData["text"]}`)
      this.scannedData = barcodeData;
     }).catch(err => {
         console.log('Error', err);
     });
    
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
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
