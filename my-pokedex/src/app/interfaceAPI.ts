export interface IPokemonList {
  count: number;
  next: null | string;
  previous: null | string;
  results: Array<{ name: string, url: string }>;
}

export interface IPokemon {
  id: number;
  name: string;
  stats: Array<{
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string
    }
  }>;
  sprites: {
    back_default: null | string,
    back_female: null | string,
    back_shiny: null | string,
    back_shiny_female: null | string,
    front_default: null | string,
    front_female: null | string,
    front_shiny: null | string,
    front_shiny_female: null | string
  }
  types: Array<{
    slot: number,
    type: {
      name: string,
      url: string
    }
  }>;
}


