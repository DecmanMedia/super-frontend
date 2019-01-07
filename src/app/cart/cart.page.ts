import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ShoppingListService } from '../shopping-list.service';
import { Router } from '@angular/router';
import { importType } from '@angular/compiler/src/output/output_ast';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  //Search variables
  public isSearchbarOpened = false;
  private searchInput: any="";

  public cartList : Array<any>;
  private response : Array<any> = [];

  //Barcode Scanner
  barcodeScannerOptions : BarcodeScannerOptions = {showTorchButton:true}

  constructor(
    private productService: ProductServiceService, 
    private router: Router,
    private barcodeScanner: BarcodeScanner,
    public ShoppingService: ShoppingListService
    ) { }

  //Scan Barcode for search
  goToScan(){
    this.barcodeScanner.scan(this.barcodeScannerOptions).then(barcodeData => {
      this.router.navigateByUrl(`/product/${barcodeData["text"]}`)
     }).catch(err => {
         console.log('Error', err);
     });
    
  }

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

  cleanCart(){
    this.ShoppingService.cleanList()
    this.ngOnInit()
  }

  ngOnInit() {
    this.ShoppingService.updateLocalCart();
    this.cartList= this.ShoppingService.GlobalShoppingList;
    console.log(this.ShoppingService.GlobalShoppingList);
    this.searchInput="";
    this.isSearchbarOpened = false;
  }


}
