import { Component, OnInit } from '@angular/core';
import {AnimeListService} from '../../services/animeList.service';

@Component({
  selector: 'app-anime-description',
  templateUrl: './anime-description.component.html',
  styleUrls: ['./anime-description.component.css']
})
export class AnimeDescriptionComponent implements OnInit {

  private anime: any;
  constructor(private animeListService: AnimeListService) {
  }

  ngOnInit() {
    this.anime = this.animeListService.anime[this.animeListService.index];
    this.animeListService.numberEmit.subscribe(
      (index: number) => {
        this.anime = this.animeListService.anime[index];
      }
    );
  }
}
