import { Injectable } from "@angular/core";
import { InterfaceAPI, InterfaceAPIFullDescript } from "./interfaceAPI";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonFromLink(link: string): Observable<InterfaceAPIFullDescript> {
    return this.http.get<InterfaceAPIFullDescript>(link);
  }

  getPokemonFullDescription(id: number): Observable<InterfaceAPIFullDescript> {
    return this.http.get<InterfaceAPIFullDescript>(
      "https://pokeapi.co/api/v2/pokemon/" + id + "/"
    );
  }

  getPokemons(limit: number, offset: number): Observable<InterfaceAPI> {
    // Send the message after fetching the pokemons
    return this.http.get<InterfaceAPI>(
      "https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + offset
    );
  }
}
