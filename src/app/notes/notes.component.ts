import {Component, OnInit, Input} from '@angular/core';

import {Car} from '../cars/car';
import {NotesService} from '../notes.service';
import {Note} from './note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() car: Car;

  public notes: Note[];

  constructor(private service: NotesService) {
  }

  ngOnInit(): void {
    this.service.getNotes(this.car).subscribe(notes => this.notes = notes);
  }
}
