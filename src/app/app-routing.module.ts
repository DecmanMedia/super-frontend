import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './list/list.module#ListPageModule',
  },
  {
    path: 'cart',
    loadChildren: './home/home.module#HomePageModule',
  },
  { 
    path: 'product/:id', 
    loadChildren: './product/product.module#ProductPageModule'
  },
  { 
    path: 'feed', 
    loadChildren: './feed/feed.module#FeedPageModule'
  },
  { 
    path: 'add-product', 
    loadChildren: './add-product/add-product.module#AddProductPageModule' 
  },
  { 
    path: 'add-price/:id/:serial', 
    loadChildren: './add-price/add-price.module#AddPricePageModule' 
  },
  { 
    path: 'search-result/:name', 
    loadChildren: './search-result/search-result.module#SearchResultPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
