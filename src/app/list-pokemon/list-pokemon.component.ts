import { Component} from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})

export class ListPokemonComponent{
  constructor(private router: Router){}
  pokemon:Pokemon[] = POKEMONS;
}
