import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PreloadSelectedModulesList} from './services/preLoad.service';


const appRoutes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent },
  { path: 'cartoon' , loadChildren: './cartoon/cartoon.module#CartoonModule', data: {preload: true} },
  //{ path: 'anime' , component: AnimeComponent }
  { path: 'anime' , loadChildren: './anime/anime.module#AnimeModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadSelectedModulesList})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
