import {VehiclesI} from './vehicle.Interface';
import {VehiclesClass} from './vehicle.class';
/**
 * Created by pthomas on 7/24/2017.
 */
export class BikeService extends VehiclesClass {
  display() {
    console.log('Its a Bike');
  }
}
