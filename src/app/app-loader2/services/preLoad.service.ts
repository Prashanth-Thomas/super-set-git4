import {PreloadingStrategy, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

/**
 * Created by pthomas on 7/19/2017.
 */
export class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, loader: Function): Observable<any> {
    return route.data && route.data.preload ? loader() : of(null);
  }
}

