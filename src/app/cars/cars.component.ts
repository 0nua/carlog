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
      .subscribe(data => {
        if (data._embedded.items.length === 0) {
          this.cars = [];
          return;
        }
        this.cars = data._embedded.items.map(item => {
          const parts = item.name.split('|');
          return {model: parts[0] || 'Unknown', vin: parts[1] || 'Unknown'};
        });
      });
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}
