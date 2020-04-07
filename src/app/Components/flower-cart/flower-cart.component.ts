import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-flower-cart',
  templateUrl: './flower-cart.component.html',
  styleUrls: ['./flower-cart.component.scss']
})
export class FlowerCartComponent implements OnInit {
  @Input() cardImage:String;
  @Input() items:any;
  @Input() price:String;
  @Input() name:String;

  constructor() { }

  ngOnInit() {
  }

}
