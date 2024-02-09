import { Injectable } from "@angular/core";
import { IPokemonList, IPokemon } from "./interfaceAPI";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private BASE_URL = 'https://pokeapi.co/api/v2';
  private BASE_URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) {}

  getPokemonByUrl(url: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(url);
  }

  getPokemonById(id: string) {
    return this.getPokemonByUrl(`${this.BASE_URL_POKEMON}${id}`);
  }

  getPokemonsList({ limit, offset }: { limit: number, offset: number }): Observable<IPokemonList> {
    return this.http.get<IPokemonList>(`${this.BASE_URL_POKEMON}?limit=${limit}&offset=${offset}`);
  }

  getBerries(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/berry`);
  }
}
