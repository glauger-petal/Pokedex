export class IPokemonList {
  count: number;
  next: string;
  previous: string;
  results: Array<Object>;
}

export class IPokemonListItem {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Object;
  sprites: Object;
  stats: Object;
}


