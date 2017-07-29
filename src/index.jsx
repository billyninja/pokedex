import React from 'react';
import ReactDOM from 'react-dom';
import * as pokedex from './components/common/pokedex.jsx';
import * as trainer from './components/common/trainer.jsx';

const trainer1 = {
  firstName: "billy"
};

const pokeList = [{
  number: 1,
  name: "bulbassaur"
}, {
  number: 2,
  name: "Ivyssaur"
}];

function PokedexMainView(props) {
  return (
      <div className="pokedex-main-view">
        <h1>PokeDex</h1>

        <div className="trainer-preview-container"> 
          <trainer.Preview trainer={trainer1} />
        </div>

        <div className="listview-container"> 
          <pokedex.ListView list={pokeList} />
        </div>

        <div className="detailview-container"> 
          <pokedex.DetailView entry="" />
        </div>

      </div>
  );
}

const elements = (
    <PokedexMainView />
);

ReactDOM.render(
  elements,
  document.getElementById('root')
);
