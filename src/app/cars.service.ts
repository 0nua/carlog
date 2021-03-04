import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Car} from './cars/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() {
  }

  getCars(): Observable<Car[]> {
    return of([
      {vin: 'KMHBT51DP9U877178', model: 'HYUNDAI GETZ', name: 'Гошан'},
      {vin: 'XW8ZZZ61ZJG054076', model: 'VW POLO V седан', name: 'Палыч'},
    ]);
  }
}
