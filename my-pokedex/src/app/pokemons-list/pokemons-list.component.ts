import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons-list.component.html",
  styleUrls: ["./pokemons-list.component.css"]
})
export class PokemonsListComponent implements OnInit {
  pokemons: Array<{
    name: string,
    url: string
  }>;
  offset: number = 0;

  constructor(
    private pokemonService: PokemonService) {}

    ngOnInit() {
      this.pokemonService.getPokemonsList({ limit: 151, offset: 0 }).subscribe(results => {
        this.pokemons = results.results.map(pokemonItem => ({ name: pokemonItem.name, url: pokemonItem.url }))
      })
    }
  }
