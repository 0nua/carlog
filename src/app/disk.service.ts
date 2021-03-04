import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiskService {

  constructor(private http: HttpClient) {
  }

  getInfo(path?: string): Observable<any> {
    return this.http.get(
      'http://localhost:4200/v1/disk/resources',
      {
        headers: {
          Authorization: 'OAuth AgAAAAAC0NgZAADLWxhM6851w0nOqvrT7Z7yEpE'
        },
        params: {
          path: 'carlog' + (path ? '/' + path : ''),
          fields: 'name, _embedded.items'
        }
      }
    );
  }
}
