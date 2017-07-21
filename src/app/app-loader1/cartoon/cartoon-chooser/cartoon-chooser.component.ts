import { Component, OnInit } from '@angular/core';
import {CartoonListService} from '../../services/cartoonList.service';

@Component({
  selector: 'app-cartoon-chooser',
  templateUrl: './cartoon-chooser.component.html',
  styleUrls: ['./cartoon-chooser.component.css']
})
export class CartoonChooserComponent implements OnInit {
  private cartoonList: any;
  constructor(private cartoonListService: CartoonListService) {
    this.cartoonList = this.cartoonListService.cartoon;
    console.log(this.cartoonList);
  }

  describe(index: number) {
    //this.cartoonListService.changedIndex(index);
    this.cartoonListService.numberEmit.next(index);
  }

  ngOnInit() {

  }

}
