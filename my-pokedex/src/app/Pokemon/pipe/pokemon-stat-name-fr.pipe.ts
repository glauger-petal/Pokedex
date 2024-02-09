import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'PokemonStatNameFr'})
export class PokemonStatNameFr implements PipeTransform {
  transform(name: string): string {
    switch(name) {
      case "hp": return "Points de vie";
      case "attack": return "Attaque";
      case "defense": return "Défense";
      case "special-attack": return "Attaque spécial";
      case "special-defense": return "Défense spécial";
      case "speed": return "Vitesse";
      default: return name;

    }
  }
}
