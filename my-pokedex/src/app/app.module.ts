import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonsListComponent } from "./Pokemon/pokemons-list/pokemons-list.component";
import { PokemonsListItemComponent } from "./Pokemon/pokemons-list-item/pokemons-list-item.component";
import { PokemonDetailComponent } from "./Pokemon/pokemon-detail/pokemon-detail.component";
import { BorderCardDirective } from './border-card.directive';
import { PageNotFoundComponent } from './page-not-found.components';

import { PokemonTypeColorPipe } from './Pokemon/pipe/pokemon-type-color.pipe';
import { PokemonStatNameFr } from './Pokemon/pipe/pokemon-stat-name-fr.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonsListItemComponent,
    PokemonDetailComponent,
    BorderCardDirective,
    PageNotFoundComponent,
    PokemonTypeColorPipe,
    PokemonStatNameFr
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}