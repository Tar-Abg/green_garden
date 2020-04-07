import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CaruselComponent } from './Components/carusel/carusel.component';
import { LineBreakComponent } from './Components/line-break/line-break.component';
import { FlowerCartComponent } from './Components/flower-cart/flower-cart.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LendingComponent } from './Components/lending/lending.component';
import { AboutOrderComponent } from './Components/about-order/about-order.component';
import { FlowerItemComponent } from './Components/flower-item/flower-item.component';

const routes: Routes = [ 
  { path: '', component: LendingComponent },
   { path: 'aboutUs', component: AboutUsComponent },
   { path: 'aboutOrder', component: AboutOrderComponent },
   {path: 'item/:id', component:FlowerItemComponent },
   {path: '**', component:LendingComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaruselComponent,
    LineBreakComponent,
    FlowerCartComponent,
    FooterComponent,
    AboutUsComponent,
    LendingComponent,
    AboutOrderComponent,
    JwPaginationComponent,
    FlowerItemComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // JwPaginationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
