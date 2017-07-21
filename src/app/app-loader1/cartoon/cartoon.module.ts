/**
 * Created by pthomas on 7/17/2017.
 */
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import { CartoonComponent } from './cartoon.component';
import {CartoonListService} from '../services/cartoonList.service';
import { CartoonChooserComponent } from './cartoon-chooser/cartoon-chooser.component';
import { CartoonDiscriptionComponent } from './cartoon-discription/cartoon-discription.component';
import {CartoonRoutingModule} from './cartoon-routing.module';


@NgModule({
  declarations: [
    CartoonComponent,
    CartoonChooserComponent,
    CartoonDiscriptionComponent
  ],
  imports: [
    CommonModule,
    CartoonRoutingModule
  ],
  providers: [CartoonListService],
  bootstrap: [CartoonComponent],
  exports : [CartoonComponent]
})
export class CartoonModule { }
