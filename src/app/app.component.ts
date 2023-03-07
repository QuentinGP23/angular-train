import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.componant.html',
})
export class AppComponent implements OnInit{
  pokemon:Pokemon[] = POKEMONS;
  pokemonSelected:Pokemon;
  ngOnInit(): void {
      console.table(this.pokemon);
  }
  SelectPokemon(pokemonId: string){
    const Id = +pokemonId;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemon[Id].name }`);
  }
}
 