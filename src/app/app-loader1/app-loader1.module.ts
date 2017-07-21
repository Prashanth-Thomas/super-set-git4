/**
 * Created by pthomas on 7/14/2017.
 */
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppLoader1Component } from './app-loader1.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import {AppRoutingModule} from './app-routing.module';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';
import {PreloadSelectedModulesList} from './services/preLoad.service';


@NgModule({
  declarations: [
    AppLoader1Component,
    AppNavigationComponent,
    AppFooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PreloadSelectedModulesList],
  bootstrap: [AppLoader1Component],
  exports : [AppLoader1Component]
})
export class AppLoader1Module { }
