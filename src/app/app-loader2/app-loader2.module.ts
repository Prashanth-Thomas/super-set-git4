/**
 * Created by pthomas on 7/21/2017.
 */
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppLoader2Component } from './app-loader2.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {PreloadSelectedModulesList} from './services/preLoad.service';
import {vehicleServiceFactory, vehicleServiceProvider} from './services/vehicles.service.provider';
import {VehiclesI} from './services/vehicle.Interface';
import {VehicleService} from './services/vehicle.service';
import {VehiclesClass} from './services/vehicle.class';
import {CheckService} from './services/check.service';
import {CarService} from './services/car.service';
import {BikeService} from './services/bike.services';

@NgModule({
  declarations: [
    AppLoader2Component,
    AppNavigationComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  /*providers: [ CheckService, CarService, BikeService, { provide: VehiclesClass, useFactory:  (check: CheckService, car: CarService, bike: BikeService ) => {
    console.log('Inder');
    if (check.check === 'car') {
      return car;
    }
    return bike;
  }, deps: [CheckService, CarService, BikeService]}, PreloadSelectedModulesList],*/
  providers: [ vehicleServiceProvider, PreloadSelectedModulesList ],
  bootstrap: [AppLoader2Component],
  exports : [AppLoader2Component]
})
export class AppLoader2Module { }
