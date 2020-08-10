import { Component } from '@angular/core';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>404 page not found !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Back to home
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }