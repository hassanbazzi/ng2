import {Component} from 'angular2/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <h2>{{hero.name}} details</h2>
    <div>
      <label>id:</label>
       {{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>`,
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    background-color: #524E50;
    color: #eaeaea;
    margin: 0 .5rem .5rem 0;
    padding-right: .5em;
    display: inline-block;
    border-radius: 4px;
    transition: all .3s;
    border: 1px solid #232323;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    background-color: #3C383A;
    transform: scale(1.05);
  }
  .heroes .badge {
    display: inline-block;
    font-size: .8rem;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    padding: .5em;
    margin-right: .4rem;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = 'Heroes of Newerth';
  hero: Hero = {
    id: 1,
    name: 'Devourer'
  }
  public heroes = HEROES;
}
var HEROES: Hero[] = [
  { "id": 11, "name": "Devourer" },
  { "id": 12, "name": "Panda" },
  { "id": 13, "name": "Nomad" },
  { "id": 14, "name": "Gauntlet" },
  { "id": 15, "name": "Deadwood" },
  { "id": 16, "name": "The Dark Lady" },
  { "id": 17, "name": "Magmus" },
  { "id": 18, "name": "Legionnaire" },
  { "id": 19, "name": "Tempest" },
  { "id": 20, "name": "Solstice" }
];
