import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsListComponent } from './Pokemon/pokemons-list/pokemons-list.component';
import { PokemonDetailComponent } from './Pokemon/pokemon-detail/pokemon-detail.component';
import { PageNotFoundComponent } from './page-not-found.components';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
