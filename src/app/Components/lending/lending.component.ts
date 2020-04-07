import { Component, OnInit } from '@angular/core';
import { GetFlowersService } from '../../Services/get-flowers.service';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.scss']
})
export class LendingComponent implements OnInit {
  image:any
  pageOfItems:Array<any>
  public items: any;

  constructor(public getItemsService:GetFlowersService){
    this.items = getItemsService.items;
    console.log(this.image)
    this.getItems();
   }

  ngOnInit() {
  }
  getItems() {
    this.getItemsService.getAllItems1().subscribe(
      (res: any) => {
        if (res) {
          this.items = res;
          this.getItemsService.items = this.items;
          // console.log(this.items)
          console.log(res);
        }
      },
      (err) => console.log(err)
    );
  } 
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
