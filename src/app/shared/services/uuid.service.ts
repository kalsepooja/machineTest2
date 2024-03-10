import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidService {

  constructor() { }

  uuid(){
    const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    const xAndYOnly = /[xy]/g;

    return template.replace(xAndYOnly, (character) => {
      const randomNo = Math.floor(Math.random()* 16);
      const newValue = character === 'x' ? randomNo : (randomNo & 0x3) |0x8;

      return newValue.toString(16);
    })
  
}
}
