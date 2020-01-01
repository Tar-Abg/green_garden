import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flower';
  public cardImages:Array<any> = [{
    flowerImg:"../assets/1.jpeg",
    name:'Alina',
    price: 19000
  },
  {
    flowerImg:"../assets/2.jpeg",
    name:'Love',
    price: 18000
  },
  {
    flowerImg:"../assets/3.jpg",
    name:'Loveee',
    price: 28000
  },
  {
    flowerImg:"../assets/4.jpeg",
    name:'asasas',
    price: 17000
  },
  {
    flowerImg:"../assets/5.jpg",
    name:'asasas',
    price: 13000
  },
  {
    flowerImg:"../assets/6.jpg",
    name:'asasas',
    price: 19000
  },
  {
    flowerImg:"../assets/7.jpg",
    name:'asas',
    price: 23000
  },
  {
    flowerImg:"../assets/8.jpg",
    name:'asas',
    price: 15000
  },
  {
    flowerImg:"../assets/9.jpg",
    name:'asasas',
    price: 18000
  },
]
}
