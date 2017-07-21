/**
 * Created by pthomas on 7/17/2017.
 */
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimeComponent } from './anime.component';
import { AnimeChooserComponent } from './anime-chooser/anime-chooser.component';
import { AnimeDescriptionComponent } from './anime-description/anime-description.component';
import {AnimeListService} from '../services/animeList.service';
import {AnimeRoutingModule} from './anime-routing.module';


@NgModule({
  declarations: [
    AnimeComponent,
    AnimeChooserComponent,
    AnimeDescriptionComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule
  ],
  providers: [AnimeListService],
  bootstrap: [AnimeComponent],
  exports : [AnimeComponent]
})
export class AnimeModule { }
