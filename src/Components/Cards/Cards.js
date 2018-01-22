import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemTypes from '../../ItemTypes';
import { DragSource } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    return {};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Cards extends Component {
  render() {
    const {connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className='Mask'>
        {(this.props.cards[0])
          ? <div>
              <img className='Image_1' src={this.props.cards[0].image} alt='' />
              <h2 className='Card-Title'>{this.props.cards[0].title}</h2>
              <div className='Card-Text-Wrapper'>
                <p className='Card-Text'>{this.props.cards[0].body}</p>
              </div>
            </div>
         : <h2 className='Card-Title'>No more cards</h2>
       }
      </div>
    );
  }
}

Cards.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Cards);
