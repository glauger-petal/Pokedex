import { Injectable } from "@angular/core";
import { IPokemonList, IPokemon } from "./interfaceAPI";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonByUrl(url: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(url);
  }

  getPokemonById(id: string) {
    return this.getPokemonByUrl(`${BASE_URL}${id}`);
  }

  getPokemonsList({ limit, offset }: { limit: number, offset: number }): Observable<IPokemonList> {
    return this.http.get<IPokemonList>(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  }

}
