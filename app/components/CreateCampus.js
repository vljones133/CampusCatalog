import React, { Component } from 'react';
import { createCampusThunk } from '../redux/campuses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.createCampus({ ...this.state });
  };

  render() {
    const { name, address } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="campus-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Campus Name:</label>
        <input name="name" onChange={handleChange} value={name} />

        <label htmlFor="address">address:</label>
        <input name="address" onChange={handleChange} value={address} />

        <button type="submit">Submit</button>
        <Link to="/campuses">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createCampus: (campus) => dispatch(createCampusThunk(campus, history)),
});

export default connect(null, mapDispatchToProps)(CreateCampus);
