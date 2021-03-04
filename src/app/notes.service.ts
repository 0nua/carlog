import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Car} from './cars/car';
import {Note} from './notes/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() {
  }

  getNotes(car: Car): Observable<Note[]> {
    return of([]);
  }
}
