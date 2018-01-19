import React from 'react';

const Cards = (props) => {
  return (
    <div className='Mask'>
      <img className='Image_1' src={props.cards[0].image} alt='' />
      <h2 className='Card-Title'>{props.cards[0].title}</h2>
      <div className='Card-Text-Wrapper'>
        <p className='Card-Text'>{props.cards[0].body}</p>
      </div>
    </div>
  );
}

export default Cards;
