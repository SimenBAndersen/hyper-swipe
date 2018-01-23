import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemTypes from '../../ItemTypes';
import { DropTarget } from 'react-dnd';

const boxTarget = {
	drop(props, monitor) {
		props.onDrop(monitor.getItem(), props.wasLiked)
	},
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Box extends Component {
  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className='Mask-Copy-2'>
        <h2 className='DISLIKE LIKE'>{this.props.name.toUpperCase()}</h2>
      </div>
    );
  }
}

Box.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
};

export default DropTarget(ItemTypes.CARD, boxTarget, collect)(Box);
