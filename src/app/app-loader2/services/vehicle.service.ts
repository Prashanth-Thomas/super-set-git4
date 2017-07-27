import {Injectable} from '@angular/core';
import {CarService} from './car.service';
import {BikeService} from './bike.services';
import {VehiclesI} from './vehicle.Interface';


export class VehicleService {
  public obj: VehiclesI;
  constructor(private check: string, private car: CarService, private bike: BikeService) {
    if (check === 'car') {
      this.obj = car;
    }
    this.obj = bike;
  }
}
