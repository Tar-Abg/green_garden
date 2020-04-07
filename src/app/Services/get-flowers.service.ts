import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFlowersService {
  public items;
  url = 'https://greengarden77.000webhostapp.com/getAll';




  constructor(private http: HttpClient) { 
    // this.getAllItems()
    // this.items = this.getAllItems();
    // console.log(this.items , 'ml,')
    
 
  }

  getAllItems() {
    return this.http.get(this.url).subscribe(data => {
      this.items =  data;
    });
  }
  getAllItems1(){
    return this.http.get(this.url);
  }
  // getAllItems1(){
  //   this.getAllItems.subscribe(
  //     (res: any) => {
  //       if (res) {
  //         this.items = res;
  //         // this.getItemsService.items = this.items;
  //         // this.image = this.items[5].image;
  //         console.log(res);
  //       }
  //     },
  //     (err) => console.log(err)
  //   );
  // }
  // getFlowerById(id:Number){
  //   let obj;
  //   for(let i = 0; i<this.items.length; i++ ){
  //     if(this.items['id'] = id){
  //       obj = this.items[i];
  //     }
  //   }
  //   return obj;
  //   console.log(this.items)
  // }


  // getItems(url) {
  //   this.getItemsService.getAllItems(url).subscribe(
  //     (res: any) => {
  //       if (res) {
  //         this.items = res;
  //         this.getItemsService.items = this.items;
  //         this.image = this.items[5].image;
  //         console.log(res);
  //       }
  //     },
  //     (err) => console.log(err)
  //   );
  // } 


}
