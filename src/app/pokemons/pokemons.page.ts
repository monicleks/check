// pokemons.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {

  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];
  selectedPokemon: any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe((data: any) => {
      this.pokemonList = data.results;
      this.filteredPokemonList = this.pokemonList;
    });
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
    this.pokemonService.getPokemonDetails(pokemon.url).subscribe((details: any) => {
      this.selectedPokemon = { ...details, image: this.getPokemonImage(details.sprites.front_default) };
    });
  }

  getPokemonImage(imageUrl: string): string {
    return imageUrl;
  }

  clearSearchResults() {
    this.filteredPokemonList = [];
  }

  deletePokemon() {
    this.selectedPokemon = null;
  }
}
