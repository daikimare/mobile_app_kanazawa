import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MarkerStyle } from './MarkerStyle';

export default class Marker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};
  
  render() {
    return (
      <div style = {MarkerStyle}>
        {this.props.text}
      </div>
    )
  }
}