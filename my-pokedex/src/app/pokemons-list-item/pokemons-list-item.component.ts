import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "pokemons-list-item",
  templateUrl: "./pokemons-list-item.component.html",
  styleUrls: []
})
export class PokemonsListItemComponent implements OnInit {
  pokemon: null | { 
    id: string,
    name: string,
    imageUrl: null | string,
    types: Array<{
      name: string 
    }> } = null;

  @Input() pokemonUrl: string;

  constructor(
    private router: Router,
    private pokemonService: PokemonService) {}

    ngOnInit() {
      this.pokemonService.getPokemonByUrl(this.pokemonUrl).subscribe(results => {
        this.pokemon = {
          id: String(results.id),
          name: results.name,
          imageUrl: results.sprites.front_default,
          types: results.types.map(pType => ({ name: pType.type.name }))
        }
      });
    }

    onClick() {
      if (!this.pokemon) {
        return;
      }
      this.router.navigate(["pokemon", this.pokemon.id])
    }
}