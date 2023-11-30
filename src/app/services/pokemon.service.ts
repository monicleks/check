import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon?limit=898`).pipe(
      catchError((error) => {
        console.error('Error fetching all Pokemon:', error);
        return throwError(error);
      })
    );
  }

  getPokemonDetails(pokemonUrl: string): Observable<any> {
    return this.http.get(pokemonUrl).pipe(
      catchError((error) => {
        console.error('Error fetching Pokemon details:', error);
        return throwError(error);
      })
    );
  }

  getPokemonImage(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
}
