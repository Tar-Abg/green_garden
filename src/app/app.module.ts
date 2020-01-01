import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CaruselComponent } from './Components/carusel/carusel.component';
import { LineBreakComponent } from './Components/line-break/line-break.component';
import { FlowerCartComponent } from './Components/flower-cart/flower-cart.component';
import { GreenGardenComponent } from './Components/green-garden/green-garden.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaruselComponent,
    LineBreakComponent,
    FlowerCartComponent,
    GreenGardenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
