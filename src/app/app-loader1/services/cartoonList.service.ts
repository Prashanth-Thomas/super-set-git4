/**
 * Created by pthomas on 7/18/2017.
 */
import {EventEmitter, Injectable, Output} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class CartoonListService {
  numberEmit = new Subject();
  index = 0;
  cartoon = [
    {
      name: 'Tom and Jerry',
      image: 'https://s2-ssl.dmcdn.net/LjrFJ.jpg',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    blishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      name: 'Danny Phantom',
      image: 'http://media.comicbook.com/2016/08/danny-phantom-197089-1280x0.jpg',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    blishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      name: 'Spongebob Squarepants',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/SpongeBob_SquarePants_logo.svg/1200px-SpongeBob_SquarePants_logo.svg.png',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    blishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
];
  constructor() {
  }

  changedIndex(index: number) {
    this.index = index;
    this.numberEmit.next(index);
  }
}
