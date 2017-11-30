import React, { Component } from 'react';
import logo from './santa.svg';
import './App.css';

import { fetchNames } from './actions';

class Card extends Component {
  state = {
    cardClasses: 'card',
    disclaimer: false,
  }

  handleShowDisclaimer = () => {
    this.setState({ disclaimer: true });
  }

  handleCardFlip = () => {
    const newState = { disclaimer: false };

    if (this.state.cardClasses.includes('card-flip')) {
      newState.cardClasses = 'card';
    } else {
      newState.cardClasses = 'card card-flip';
    }

    this.setState(newState);
  }

  render() {
    const renderDisclaimer = () => {
      return (
        <span className="disclaimer">
          Are you sure you are {this.props.name}? 
        </span>
      )
    };

    return (
      <div className="card-container">
        <div onClick={!this.state.disclaimer ? this.handleShowDisclaimer : this.handleCardFlip} className={this.state.cardClasses}>
          <div className="card-front">
            {this.state.disclaimer ? renderDisclaimer() : <h2>{this.state.cardClasses.includes('card-flip') ? null : this.props.name}</h2>}
          </div>
          <img alt="" className="card-back" src={`./images/${this.props.selection}.jpg`} />
        </div>
      </div> 
    );
  }
}

class App extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    fetchNames()
      .then((users) => {
        this.setState({ users })
      });
  }


  render() {
    const renderCard = (item, idx) => {
      return (
        <Card selection={item.selection} index={idx} name={item.name} key={idx} />
      );
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="info">
          <h4>Welcome to the 2017 edition of Hatdraw!</h4>
          <p>The rules should be pretty self explanatory. Find your name below and click it!</p>
          <p>Make sure you do not click anyone's name but your own! Otherwise you will ruin the surprise!</p>
          <p>You will be asked to confirm your choice, and the app will reach into a hat and pick out your selection!</p>
          <p>Sorry it took so long xD</p>
        </div>
        <div className="card-wrapper">
          {this.state.users.map(renderCard)}
        </div>
        <footer className="App-footer">
          <h3>Merry Christmas Rogers family :D</h3>
        </footer>
      </div>
    );
  }
}

export default App;
