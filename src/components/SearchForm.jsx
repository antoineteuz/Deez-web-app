import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    onSubmit(this.state.value);

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="searchform" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="searchform-textbox"
            placeholder="Rechercher une musique"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input
            title="Search"
            className="searchform-btn"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
