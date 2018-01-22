import React from 'react';

const BackgroundCards = (props) => {
  return(
    <div>
      {(props.cards[1])
        ? <div className='Background-Card'>
            <img className='Image_2' src={props.cards[1].image} alt='' />
          </div>
        : <div></div>}
      {(props.cards[2])
        ? <div className='Background-Card'>
            <img className='Image_3' src={props.cards[2].image} alt='' />
          </div>
        : <div></div>}
    </div>
  )
}

export default BackgroundCards;
