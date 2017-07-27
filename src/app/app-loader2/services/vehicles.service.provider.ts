import {CheckService} from './check.service';
import {CarService} from './car.service';
import {BikeService} from './bike.services';
import {VehicleService} from './vehicle.service';
import {VehiclesI} from './vehicle.Interface';
import {VehiclesClass} from './vehicle.class';


export  const vehicleServiceFactory = ( car: CarService, check: CheckService, bike: BikeService ) => {
  console.log('Inder');
  if (check.check === 'car') {
    return car;
  }
  return bike;
};

export let vehicleServiceProvider = {
  provide: VehiclesClass,
  useFactory: vehicleServiceFactory,
  deps: [CheckService, CarService, BikeService]
  };
