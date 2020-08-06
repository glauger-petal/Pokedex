import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonsListComponent } from "./pokemons-list/pokemons-list.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PageNotFoundComponent } from './page-not-found.components';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonDetailComponent,
    BorderCardDirective,
    PageNotFoundComponent,
    FilterPokemonPipePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
