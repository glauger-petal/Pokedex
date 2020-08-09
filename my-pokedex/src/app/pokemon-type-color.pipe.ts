import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'fire':
        color = 'orange darken-1';
        break;
      case 'water':
        color = 'blue lighten-1';
        break;
      case 'grass':
        color = 'light-green accent-3';
        break;
      case 'bug':
        color = 'light-green';
        break;
      case 'normal':
        color = 'grey lighten-1';
        break;
      case 'flying':
        color = 'blue lighten-3';
        break;
      case 'poison':
        color = 'deep-purple accent-1';
        break;
      case 'fairy':
        color = 'pink lighten-4';
        break;
      case 'psychic':
        color = 'pink lighten-2';
        break;
      case 'electric':
        color = 'lime accent-1';
        break;
      case 'fighting':
        color = 'orange darken-4';
        break;
      case 'ground':
        color = 'lime darken-3';
        break;
      case 'steel':
        color = 'blue-grey';
        break;
      case 'ice':
        color = 'cyan accent-3';
        break;
      case 'ghost':
        color = 'deep-purple darken-2';
        break;
      case 'rock':
        color = 'lime darken-4';
        break;
      case 'dragon':
        color = 'teal accent-4';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}