import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { GetFlowersService } from '../../Services/get-flowers.service';


@Component({
  selector: 'app-flower-item',
  templateUrl: './flower-item.component.html',
  styleUrls: ['./flower-item.component.scss']
})
export class FlowerItemComponent implements OnInit {
  flowerObject:any;
  items = []

  id:number;
  itemObject:any;
  constructor( private router:Router, private activRout:ActivatedRoute, private flowerService:GetFlowersService) { 
    this.activRout.params
    .subscribe((params)=>{
      this.id = params['id'];  
    });

    
  }
  getItems() {
    this.flowerService.getAllItems1().subscribe(
      (res: any) => {
        if (res) {
          this.items = res;
          this.getItem(this.id);
        }
      },
      (err) => console.log(err)
    );
  } 
  getItem(id){
    for(let i = 0; i<this.items.length; i++ ){
      if(this.items[i]['id'] == id){
        this.flowerObject = this.items[i];
      }
    }
  }

  ngOnInit() {
    this.getItems()
  }

}
