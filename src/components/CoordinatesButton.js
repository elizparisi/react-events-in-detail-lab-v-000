// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
  handleClick = (event) => {
    this.props.onReceiveCoordinates{[event.X, event.Y]
  }
  
}