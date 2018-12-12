import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  private title: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.title = this.route.snapshot.paramMap.get('id')
  }

}