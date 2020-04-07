import { Component, OnInit, HostListener } from '@angular/core';
import {GetFlowersService} from '../../Services/get-flowers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showNavbarList: Boolean = false;
  public changeHeaderColor: Boolean = false;
  public items: any;
  @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {
    if(document.documentElement.scrollTop > 150){
      this.changeHeaderColor = true;
    } else {
      this.changeHeaderColor = false;
    }

}
  // show hide navbar
  togleNavbar(){
    this.showNavbarList = !this.showNavbarList;
  }
  constructor(public getItemsService:GetFlowersService) {
    
   }
   getItems() {
    this.getItemsService.getAllItems1().subscribe(
      (res: any) => {
        if (res) {
          this.items = res;
          this.getItemsService.items = this.items;
          // this.getItemsService.items = this.items;
          // this.image = this.items[5].image;
          // console.log(res);
        }
      },
      (err) => console.log(err)
    );
  } 
  ngOnInit() {
    this.getItems();
  }


}
