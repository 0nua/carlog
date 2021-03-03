import {Component, OnInit, Input} from '@angular/core';

import {Car} from '../cars/car';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() car: Car;

  public notes: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
