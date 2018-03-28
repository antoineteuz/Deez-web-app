import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

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
      <form className="Form" onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
