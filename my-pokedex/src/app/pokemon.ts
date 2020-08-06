export class Pokemon {
  id: number;
  name: string;
  sprites: Object;
  types: Array<String> = [];
  height: number;
  weight: number;
  stats: Array<String> = [];

  constructor();
  constructor(id?: number, name?: string);
  constructor(id?: number, name?: string, sprites?: Object, types?: string[]);
  constructor(
    id?: number,
    name?: string,
    sprites?: Object,
    types?: string[],
    height?: number,
    weight?: number,
    stats?: Array<String>
  ) {
    this.id = id;
    this.name = name;
    this.sprites = sprites;
    this.types = types;
    this.height = height;
    this.weight = weight;
    this.stats = stats;
  }
}
