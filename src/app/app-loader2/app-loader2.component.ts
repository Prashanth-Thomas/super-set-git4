import {Component, Inject, OnInit} from '@angular/core';
import {vehicleServiceProvider} from './services/vehicles.service.provider';
import {VehicleService} from './services/vehicle.service';
import {VehiclesClass} from './services/vehicle.class';

@Component({
  selector: 'app-app-loader2',
  templateUrl: './app-loader2.component.html',
  styleUrls: ['./app-loader2.component.css'],

})
export class AppLoader2Component implements OnInit {

  constructor(@Inject(vehicleServiceProvider)private vClass) { }

  ngOnInit() {
     this.vClass.display();
  }

}
