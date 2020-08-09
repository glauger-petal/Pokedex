import { Injectable } from "@angular/core";
import { IPokemonList, IPokemonListItem } from "./interfaceAPI";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  private API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemonFromLink(link: string): Observable<IPokemonListItem> {
    return this.http.get<IPokemonListItem>(link);
  }

  getPokemon(id: number): Observable<IPokemonListItem> {
  return this.http.get<IPokemonListItem>(`${this.API_URL}${id}/`
  );
}

  getPokemonsList(limit: number, offset: number): Observable<IPokemonList> {
    return this.http.get<IPokemonList>(`${this.API_URL}?limit=${limit}&offset=${offset}`
    );
  }
}