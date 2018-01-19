import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Dislike from './Components/Dislike/Dislike';
import Cards from './Components/Cards/Cards';
import Like from './Components/Like/Like';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='Card-Flex'>
          <Dislike />
          <Cards />
          <Like />
        </div>
      </div>
    );
  }
}

export default App;
