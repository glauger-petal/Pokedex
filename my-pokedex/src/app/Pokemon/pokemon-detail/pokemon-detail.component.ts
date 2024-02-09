import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { PokemonService } from '../pokemon.service';

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: {
    name: string,
    id: number,
    imageUrlFrontDefault: null | string,
    imageUrlBackDefault: null | string,
    imageUrlFrontShiny: null | string,
    imageUrlBackShinyt: null | string,
    stats: Array<{
      name: string,
      value: number
    }>,
    types: Array<{
      name: string 
    }> 
  };

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(id).subscribe(pokemon => {
      this.pokemon = {
        name: pokemon.name,
        id: pokemon.id,
        imageUrlFrontDefault: pokemon.sprites.front_default,
        imageUrlBackDefault: pokemon.sprites.back_default,
        imageUrlFrontShiny: pokemon.sprites.front_shiny,
        imageUrlBackShinyt: pokemon.sprites.back_shiny,
        stats: pokemon.stats.map(pStat => ({ name: pStat.stat.name, value: pStat.base_stat })),
        types: pokemon.types.map(pType => ({ name: pType.type.name }))
      };
    });
   }

  goBack(): void {
    this.location.back();
  }

}
