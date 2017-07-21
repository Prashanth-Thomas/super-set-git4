import { Component, OnInit } from '@angular/core';
import {CartoonListService} from '../../services/cartoonList.service';


@Component({
  selector: 'app-cartoon-discription',
  templateUrl: './cartoon-discription.component.html',
  styleUrls: ['./cartoon-discription.component.css']
})
export class CartoonDiscriptionComponent implements OnInit {

  private cartoon: any;
  constructor(private cartoonListService: CartoonListService) {
  }

  ngOnInit() {
    this.cartoon = this.cartoonListService.cartoon[this.cartoonListService.index];
    this.cartoonListService.numberEmit.subscribe(
      (index: number) => {
        this.cartoon = this.cartoonListService.cartoon[index];
      }
    );
  }

}
