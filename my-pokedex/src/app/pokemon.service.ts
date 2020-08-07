import { Injectable } from "@angular/core";
import { InterfaceAPI, InterfaceAPIFullDescript } from "./interfaceAPI";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  private API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemonFromLink(link: string): Observable<InterfaceAPIFullDescript> {
    return this.http.get<InterfaceAPIFullDescript>(link);
  }

  getPokemonFullDescription(id: number): Observable<InterfaceAPIFullDescript> {
  return this.http.get<InterfaceAPIFullDescript>(`${this.API_URL}${id}/`
  );
}

  getPokemons(limit: number, offset: number): Observable<InterfaceAPI> {
    return this.http.get<InterfaceAPI>(`${this.API_URL}?limit=${limit}&offset=${offset}`
    );
  }
}
