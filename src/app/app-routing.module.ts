import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LendingComponent } from './Components/lending/lending.component';
import { AboutOrderComponent } from './Components/about-order/about-order.component';
import { FlowerItemComponent } from './Components/flower-item/flower-item.component';


const routes: Routes = [ 
  { path: '', component: LendingComponent },
   { path: 'aboutUs', component: AboutUsComponent },
   { path: 'aboutOrder', component: AboutOrderComponent },
   {path: 'item/:id', component:FlowerItemComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true}
    )
    // AboutUsComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
