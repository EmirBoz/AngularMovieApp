import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {id: 1, name: 'movie 1',description:'Nice film',imageUrl:'1.jpg'},
      {id: 2, name: 'movie 2',description:'Nice film',imageUrl:'2.jpg'},
      {id: 3, name: 'movie 3',description:'Nice film',imageUrl:'3.jpg'},
      {id: 4, name: 'movie 4',description:'Nice film',imageUrl:'4.jpg'},
      {id: 5, name: 'movie 6',description:'Nice film',imageUrl:'5.jpg'},
      {id: 6, name: 'movie 7',description:'Nice film',imageUrl:'6.jpg'},
      {id: 7, name: 'movie 8',description:'Nice film',imageUrl:'7.jpg'},
      {id: 8, name: 'movie 9',description:'Nice film',imageUrl:'8.jpg'},
    ];
    return {movies};
  }

  constructor() { }
}
