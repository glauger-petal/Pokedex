import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Pokemon } from "../pokemon";
import { PokemonService } from '../pokemon.service';

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.css"]
})
export class PokemonDetailComponent implements OnInit {
  
  @Input() pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemon[id] = this.pokemonService.getPokemon(id);     
   }

  goBack(): void {
      this.router.navigate(['/pokemons']);
  }

}
