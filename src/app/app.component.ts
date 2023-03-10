import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.componant.html',
})
export class AppComponent {
  // pokemon:Pokemon[] = POKEMONS;
  // pokemonSelected:Pokemon|undefined;
  // ngOnInit(): void {
  // }
  // SelectPokemon(pokemonId: string){
  //   const pokemon1: Pokemon|undefined = this.pokemon.find(pokemon1 => pokemon1.id == +pokemonId);
  //   if(pokemon1){
  //     console.log(`Vous avez cliqué sur le pokemon ${pokemon1.name }`);
  //     this.pokemonSelected = pokemon1;
  //   }
  //   else{
  //     console.log(`Vous avez un pokemon qui n'existe pas.`);
  //     this.pokemonSelected = pokemon1;
  //   }
  // }
}
 