import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Header from './Components/Header/Header';
import Box from './Components/Box/Box';
import Cards from './Components/Cards/Cards';
import {cards} from './cards';
import ItemTypes from './ItemTypes';

class App extends Component {
  constructor() {
    super();

    this.state = {
        cards: cards,
      }
  }

  handleDrop() {
    console.log('was dropped..');
  }

  render() {
    return (
      <div>
        <Header />
        <div className='Card-Flex'>
          <Box name={'Dislike'} onDrop={this.handleDrop}/>
          <Cards cards={this.state.cards}/>
          <Box name={'Like'} onDrop={this.handleDrop}/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
