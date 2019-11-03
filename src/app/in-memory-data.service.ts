import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Member} from './member';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 11, name: 'Nicolassss', salary: 19200, age: 84, joinDate: '10-10-2018' },
      { id: 12, name: 'Narco', salary: 19203, age: 24, joinDate: '10-10-2018' },
      { id: 13, name: 'Bombasto', salary: 19250, age: 34, joinDate: '10-10-2018'},
      { id: 14, name: 'Celeritas', salary: 192050, age: 74 , joinDate: '10-10-2018'},
      { id: 15, name: 'Magneta', salary: 1920088, age: 64, joinDate: '10-10-2018'},
      { id: 16, name: 'RubberMan', salary: 1920088, age: 34, joinDate: '10-10-2018'},
      { id: 17, name: 'Dynama', salary: 1920088,  age: 24, joinDate: '10-10-2018' },
      { id: 18, name: 'Dr IQ', salary: 1920088,  age: 24, joinDate: '10-10-2018'},
      { id: 19, name: 'Magma', salary: 19208980, age: 37, joinDate: '10-10-2018'},
      { id: 20, name: 'Tornado', salary: 19200934 , age: 35 , joinDate: '10-10-2018'}
    ];
    return { members };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 13 : 15;
  }
}
