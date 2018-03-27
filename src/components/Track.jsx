import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired
  };

  render() {
    const { title, picture } = this.props.track;
    return (
      <div>
        <h3>{title}</h3>
        <img src={picture} alt={title} />
      </div>
    );
  }
}
