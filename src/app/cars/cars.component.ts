import {Component, OnInit} from '@angular/core';
import {Car} from './car';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: Car[] = [];
  public selectedCar: Car;

  constructor(private service: CarsService) {
  }

  ngOnInit(): void {
    this.service.getCars()
      .subscribe(cars => this.cars = cars);
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

}
