import React from 'react';


class ListEntry extends React.Component {

    constructor(props) {
      super(props);

      this.parentClickCallback = props.parentClickCallback;
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
      this.parentClickCallback(this.props.number, this.props.info);
    }

    render() {
      return (
        <li className={"listentry " + (this.props.isSelected ? 'selected' : '') } onClick={this.handleClick}>
            <p>#{this.props.number} {this.props.info.name} Type: {this.props.info.type}</p>
        </li>);
    }
}

class ListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      filterGrassType: true,
      filterFireType: true,
      filterGrassType: true,
      filterFireType: true,
      filterWaterType: true,
      filterBugType: true,
      filterNormalType: true,
      filterPoisonType: true,
      filterRockType: true,
      filterElectricType: true,
      filterGroundType: true,
      filterPsychicType: true,
      filterGhostType: true,
      filterDragonType: true,
      filterIceType: true,
      filterFightingType: true,
    };
    this.changeFilterCB = props.changeFilterCB;
    this.updateFilter = this.updateFilter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  componentDidMount() {
    this.updateFilter();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, this.updateFilter);
  }

  updateFilter() {
    this.changeFilterCB(this.state);
  }

  render() {
    return (<div className="tile filter-container">
      <h4>Filters:</h4>
      <form className="filterForm">
        <div className="type-filters-container"> 

        <div>
          <label htmlFor="filterGrassType">Grass</label>
          <input type="checkbox" name="filterGrassType" value={this.state.filterGrassType} checked={this.state.filterGrassType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterFireType">Fire</label>
          <input type="checkbox" name="filterFireType" value={this.state.filterFireType} checked={this.state.filterFireType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterWaterType">Water</label>
          <input type="checkbox" name="filterWaterType" value={this.state.filterWaterType} checked={this.state.filterWaterType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterBugType">Bug</label>
          <input type="checkbox" name="filterBugType" value={this.state.filterBugType} checked={this.state.filterBugType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterNormalType">Normal</label>
          <input type="checkbox" name="filterNormalType" value={this.state.filterNormalType} checked={this.state.filterNormalType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterPoisonType">Poison</label>
          <input type="checkbox" name="filterPoisonType" value={this.state.filterPoisonType} checked={this.state.filterPoisonType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterRockType">Rock</label>
          <input type="checkbox" name="filterRockType" value={this.state.filterRockType} checked={this.state.filterRockType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterElectricType">Electric</label>
          <input type="checkbox" name="filterElectricType" value={this.state.filterElectricType} checked={this.state.filterElectricType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterGroundType">Ground</label>
          <input type="checkbox" name="filterGroundType" value={this.state.filterGroundType} checked={this.state.filterGroundType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterPsychicType">Psychic</label>
          <input type="checkbox" name="filterPsychicType" value={this.state.filterPsychicType} checked={this.state.filterPsychicType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterGhostType">Ghost</label>
          <input type="checkbox" name="filterGhostType" value={this.state.filterGhostType} checked={this.state.filterGhostType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterDragonType">Dragon</label>
          <input type="checkbox" name="filterDragonType" value={this.state.filterDragonType} checked={this.state.filterDragonType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterIceType">Ice</label>
          <input type="checkbox" name="filterIceType" value={this.state.filterIceType} checked={this.state.filterIceType} onChange={this.handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="filterFightingType">Fighting</label>
          <input type="checkbox" name="filterFightingType" value={this.state.filterFightingType} checked={this.state.filterFightingType} onChange={this.handleInputChange} /> 
        </div>

        </div>
      </form>
    </div>);
  }
}

class ListView extends React.Component {

    constructor(props) {
      super(props);

      this.state = {list: props.list, filterCfg: {}};
      this.parentClickCallback = props.parentClickCallback;
      this.handleEntryClicked = this.handleEntryClicked.bind(this);
      this.filter = this.filter.bind(this);
      this.changeFilter = this.changeFilter.bind(this);
    }

    filter(entry) {
      for (var fil in this.state.filterCfg) {
        var fVal = this.state.filterCfg[fil];

        switch(fil) {
          case 'filterGrassType':
            if(fVal && (entry.type === "grass")){
              return true;
            };
          break;
          case 'filterFireType':
            if(fVal && (entry.type === "fire")){
              return true;
            };
          break;
          case 'filterWaterType':
            if(fVal && (entry.type === "fire")){
              return true;
            };
          break;
          case 'filterNormalType':
            if(fVal && (entry.type === "fire")){
              return true;
            };
          break;
          case 'filterBugType':
            if(fVal && (entry.type === "bug")){
              return true;
            };
          break;
          case 'filterElectricType':
            if(fVal && (entry.type === "electric")){
              return true;
            };
          break;
          case 'filterFightingType':
            if(fVal && (entry.type === "fighting")){
              return true;
            };
          break;
          case 'filterPoisonType':
            if(fVal && (entry.type === "poison")){
              return true;
            };
          break;
          case 'filterPsychicType':
            if(fVal && (entry.type === "psychic")){
              return true;
            };
          break;
          case 'filterRockType':
            if(fVal && (entry.type === "rock")){
              return true;
            };
          break;
          case 'filterGroundType':
            if(fVal && (entry.type === "ground")){
              return true;
            };
          break;
          case 'filterDragonType':
            if(fVal && (entry.type === "dragon")){
              return true;
            };
          break;
          case 'filterIceType':
            if(fVal && (entry.type === "ice")){
              return true;
            };
          break;
          case 'filterGhostType':
            if(fVal && (entry.type === "ghost")){
              return true;
            };
          break;
        }
      }

      return false;
    }

    handleEntryClicked(number, selectedPokemon) {
      this.parentClickCallback(number, selectedPokemon);
    }

    changeFilter(newFilterCfg) {
      this.setState((prev)=>({
        filterCfg: newFilterCfg,
      }));
    }

    render() {
      const listItems = [];
      for(var num in this.state.list) {
        var curr = this.state.list[num];

        if (this.filter(curr)){
          listItems.push((
            <ListEntry key={num} isSelected={this.props.currentlySelected == num} parentClickCallback={this.handleEntryClicked} info={curr} number={num} />
          ));
        }
      }

      return (
        <div>
          <ListFilter changeFilterCB={this.changeFilter}/>
          <ul>{listItems}</ul>
        </div>
      );
    }
}

class DetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
    }

    render() {
      return (<div className="container">

                <div className="tile is-6">
                  <h3>{this.props.entry.name} Type: {this.props.entry.type}</h3>
                </div>

                <div className="tile is-parent is-6">
                  
                  <div className="tile is-child">
                    Att: {this.props.entry.attack} Def: {this.props.entry.defense} 
                  </div>
                  
                  <div className="tile is-child">
                    <h4>Moves:</h4>
                    <ul className="move-list">
                      {this.props.entry.moves.map((mv, idx) => {
                        return (<li key={idx}>{mv}</li>)
                      })}
                    </ul>
                  </div>
                  <div className="tile is-child">
                    <h4>Description goes here</h4>
                  </div>

                  {this.props.evolveTo && 
                    <div className="tile is-child">
                      <h4>Evolves to: {this.props.evolveTo.name}</h4>
                    </div>}

                </div>

      </div>);
    }
}

export {ListView, DetailView};
