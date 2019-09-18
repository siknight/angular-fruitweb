import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fruit} from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { }

  getFruits(): Observable<Fruit[]> {
    // return this.http.get<Fruit[]>('http://localhost:8093/rest/fruits');
    return this.http.get<Fruit[]>('https://fruit-rest-si-appreciative-duiker.cfapps.io/rest/fruits');
  }
  getFruit(id): Observable<Fruit> {
    return this.http.get<Fruit>('https://fruit-rest-si-appreciative-duiker.cfapps.io//rest/fruits/' + id);
  }


  deleteBook(id: number) {
    return this.http.delete('https://fruit-rest-si-appreciative-duiker.cfapps.io//rest/fruits/' + id);
  }

  addFruit(fruit: Fruit) {
      return this.http.post('https://fruit-rest-si-appreciative-duiker.cfapps.io//rest/fruits', fruit);
  }

  updateFruit(fruit) {
     return this.http.put('https://fruit-rest-si-appreciative-duiker.cfapps.io//rest/fruits', fruit);
  }
}
