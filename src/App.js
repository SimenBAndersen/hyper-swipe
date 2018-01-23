import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Header from './Components/Header/Header';
import Box from './Components/Box/Box';
import Cards from './Components/Cards/Cards';
import BackgroundCards from './Components/Cards/BackgroundCards';
import {cards} from './cards';
import ItemTypes from './ItemTypes';

class App extends Component {
  constructor() {
    super();

    this.state = {
        cards: cards,
      }
  }

  handleDrop = (monitor, wasLiked) => {
    if (this.state.cards[0]) {
      let newCards = this.state.cards;
      let recentCard = this.state.cards[0];
      recentCard.wasLiked = wasLiked;

      localStorage.setItem(recentCard.title, JSON.stringify(recentCard));

      newCards.splice(0, 1);
      this.setState({cards: newCards});
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className='Card-Flex'>
          <Box name={'Dislike'} onDrop={this.handleDrop} wasLiked={false}/>
          <BackgroundCards cards={this.state.cards}/>
          <Cards cards={this.state.cards}/>
          <Box name={'Like'} onDrop={this.handleDrop} wasLiked={true}/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
