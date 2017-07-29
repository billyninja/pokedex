import React from 'react';


class ListEntry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          isSelected: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
      this.setState((prevState) => ({
        isSelected: !prevState.isSelected
      }));
    }

    render() {
      return (
        <li className={"listentry " + (this.state.isSelected ? 'selected' : 'xx') } onClick={this.handleClick}>
            <p>#{this.props.info.number} {this.props.info.name}</p>
        </li>);
    }
}



class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {list: props.list};
    }

    render() {
      return (
        <div> 
          <h2>listview here!</h2>           
          <ul>
            {this.state.list.map(function(listValue, key){
                return <ListEntry info={listValue} key={key}  />;
              })}
          </ul>
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
      return (<h2>detailview here!</h2>);
    }
}

export {ListView, DetailView};