import { Component, OnInit } from '@angular/core';
import {AnimeListService} from '../../services/animeList.service';

@Component({
  selector: 'app-anime-chooser',
  templateUrl: './anime-chooser.component.html',
  styleUrls: ['./anime-chooser.component.css']
})
export class AnimeChooserComponent implements OnInit {
  private animeList: any;
  constructor(private animeListService: AnimeListService) {
    this.animeList = this.animeListService.anime;
    console.log(this.animeList);
  }

  describe(index: number) {
    //this.cartoonListService.changedIndex(index);
    this.animeListService.numberEmit.next(index);
  }

  ngOnInit() {

  }
}
