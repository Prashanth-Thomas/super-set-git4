/**
 * Created by pthomas on 7/19/2017.
 */
import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {CartoonComponent} from './cartoon.component';


const appRoutes: Routes = [
  //{ path: '' , redirectTo: '/cartoon', pathMatch: 'full' },
//  { path: 'anime' , component: AnimeComponent }
  { path: '' , component: CartoonComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(appRoutes)],
  exports: [ RouterModule ]
})
export class CartoonRoutingModule {
}
