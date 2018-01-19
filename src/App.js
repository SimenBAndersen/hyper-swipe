import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Dislike from './Components/Dislike/Dislike';
import Cards from './Components/Cards/Cards';
import Like from './Components/Like/Like';
import {cards} from './cards';

class App extends Component {
  constructor() {
    super();

    this.state = {
        cards: cards,
      }
  }

  render() {
    return (
      <div>
        <Header />
        <div className='Card-Flex'>
          <Dislike />
          <Cards cards={this.state.cards}/>
          <Like />
        </div>
      </div>
    );
  }
}

export default App;
