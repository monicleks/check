import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];
  selectedPokemon: any = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().pipe(
      catchError((error) => {
        console.error('Error fetching Pokemon list:', error);
        return [];
      })
    ).subscribe(
      (data: any) => {
        this.pokemonList = data.results;
        this.filteredPokemonList = this.pokemonList;
      }
    );
  }

  searchPokemon(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    this.filteredPokemonList = this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );
  }

  selectPokemon(pokemon: any) {
    this.getPokemonDetails(pokemon);
  }

  getPokemonDetails(pokemon: any) {
    this.pokemonService.getPokemonDetails(pokemon.url).pipe(
      catchError((error) => {
        console.error('Error fetching Pokemon details:', error);
        return [];
      })
    ).subscribe(
      (details: any) => {
        this.selectedPokemon = { ...details, name: pokemon.name };
      }
    );
  }
  getPokemonImage(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
  

  clearSearchResults() {
    this.filteredPokemonList = [];
  }

  deletePokemon() {
    this.selectedPokemon = null;
  }
}
