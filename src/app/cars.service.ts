import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DiskService} from './disk.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private disk: DiskService) {}

  getCars(): Observable<any> {
    return this.disk.getInfo();
  }
}
