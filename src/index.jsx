import React from 'react';
import ReactDOM from 'react-dom';
import * as pokedex from './components/common/pokedex.jsx';
import * as trainer from './components/common/trainer.jsx';
import * as pokemon from './pokemon.js';

const trainer1 = {
  firstName: "billy"
};

const pokeList = JSON.parse(pokemon.RawList());

class PokedexMainView extends React.Component {

  constructor(props) {

      super(props);
      var currInfo = {};
      var currSel = props.currentlySelected;
      currInfo = pokeList[currSel];

      this.state = {
        list: props.list,
        currentlySelected: currSel,
        currentlySelectedInfo: currInfo,
      };

      this.changeCurrentlySelected = this.changeCurrentlySelected.bind(this);
  }

  changeCurrentlySelected(number, selectedPokemon) {
    console.log(selectedPokemon);

    this.setState((prev) =>({
      currentlySelected: number,
      currentlySelectedInfo: selectedPokemon
    }));
  }

  render(props) {
    return (
        <div className="pokedex-main-view">
          <h1>PokéDex</h1>

          <div className="trainer-preview-container"> 
            <trainer.Preview trainer={trainer1} />
          </div>

          <div className="listview-container"> 
            <pokedex.ListView currentlySelected={this.state.currentlySelected} list={pokeList} parentClickCallback={this.changeCurrentlySelected} />
          </div>

          <div className="detailview-container"> 
            <pokedex.DetailView entry={this.state.currentlySelectedInfo} />
          </div>

        </div>
    );
  }
}


const elements = (
    <PokedexMainView currentlySelected="1"/>
);

ReactDOM.render(
  elements,
  document.getElementById('root')
);
