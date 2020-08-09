import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from '@angular/router';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons-list.component.html",
  styleUrls: ["./pokemons-list.component.css"]
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  list_pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon = new Pokemon();
  offset: number = 0;
  searchText: string;
  id_select: number;     
  constructor(
    private router: Router,
    private pokemonService: PokemonService) {}

    ngOnInit() {
      this.getPokemons();
      this.selectedPokemon["id"] = 1;
      this.selectedPokemon["sprites"] = "";
      this.selectedPokemon["stats"] = [];
      this.getPokemonsSelected(this.selectedPokemon);
    }
  
    onSelect(pokemon: Pokemon): void {
      this.getPokemonsSelected(pokemon);
      console.log('Vous avez selectionné ' + pokemon.id);
      let link = ['/pokemon/' + pokemon.id];
      console.log(link)
      this.router.navigate(link);
    }
  
    getPokemonsSelected(pokemon: Pokemon): void {
      this.pokemonService
        .getPokemon(pokemon.id)
        .subscribe(results => {
          this.selectedPokemon.id = results.id;
          this.selectedPokemon.name = results.name;
          this.selectedPokemon.height = results.height / 10;
          this.selectedPokemon.weight = results.weight / 10;
          let type: string[] = [];
          for (let i in results.types) {
            type.push(results.types[i].type.name);
          }
          this.selectedPokemon.types = type;
          this.selectedPokemon.sprites = results.sprites;
          let temp_stats: string[] = [];
          for (let i in results.stats) {
            temp_stats.push(results.stats[i].base_stat);
          }
          this.selectedPokemon.stats = temp_stats;
        });
    }
  
    getPokemons(): void {
      this.pokemonService.getPokemonsList(20, this.offset).subscribe(results => {
        this.offset += 20;
        for (let i in results.results as any) {
          this.pokemonService
            .getPokemonFromLink(results.results[i].url)
            .subscribe(results => {
              let newPokemon = new Pokemon();
              newPokemon.id = results.id;
              newPokemon.name = results.name;
              newPokemon.sprites = results.sprites;
              let type: string[] = [];
              for (let i in results.types) {
                type.push(results.types[i].type.name);
              }
              newPokemon.types = type;
              this.pokemons.push(newPokemon);
            });
          setTimeout(() => {
            this.pokemons.sort(function(a, b) {
              if (a.id < b.id) return -1;
              if (a.id > b.id) return 1;
              return 0;
            });
          }, 500);
        }
      });
    }
}
