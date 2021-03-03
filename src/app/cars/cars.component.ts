import {Component, OnInit} from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: Car[] = [
    {vin: 'KMHBT51DP9U877178', model: 'HYUNDAI GETZ', name: 'Гошан'},
    {vin: 'XW8ZZZ61ZJG054076', model: 'VW POLO V седан', name: 'Палыч'},
  ];
  public selectedCar: Car;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

}
