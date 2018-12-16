import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductServiceService } from './product-service.service';

import { HttpClientModule }  from '@angular/common/http';


import { AppService } from './app.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule
=======
    AppRoutingModule,HttpClientModule

>>>>>>> 47bfd569d14e2d201da6472f0b6bb26c1845417c
  ],
  providers: [
    AppService,
    StatusBar,
    SplashScreen,
    ProductServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
