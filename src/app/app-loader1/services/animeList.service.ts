/**
 * Created by pthomas on 7/18/2017.
 */
import {EventEmitter, Injectable, Output} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class AnimeListService {
  numberEmit = new Subject();
  index = 0;
  anime = [
    {
      name: 'Onepiece',
      image: 'http://vignette1.wikia.nocookie.net/onepiece/images/8/87/One_Piece_Anime_Logo.png/revision/latest?cb=20140921221019',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    blishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      name: 'Death Note',
      image: 'https://static1.gamespot.com/uploads/original/364/3649215/3048628-4726801454-death.jpg',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    blishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      name: 'Code Geass',
      image: 'http://i0.kym-cdn.com/entries/icons/original/000/016/092/tumblr_static_code-geass-r.jpg',
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
