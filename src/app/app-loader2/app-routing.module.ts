/**
 * Created by pthomas on 7/21/2017.
 */
import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {PreloadSelectedModulesList} from './services/preLoad.service';



const appRoutes: Routes = [
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadSelectedModulesList})],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {
}
