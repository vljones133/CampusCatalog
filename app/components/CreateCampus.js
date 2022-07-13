import React, { Component } from 'react';
import { createCampusThunk } from '../redux/campuses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateCampus extends Component {
  constructor() {
    super();
    this.state = {
      campusName: '',
      address: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
    const { campusName, address } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="campus-form" onSubmit={handleSubmit}>
        <label htmlFor="campusName">Campus Name:</label>
        <input name="campusName" onChange={handleChange} value={campusName} />

        <label htmlFor="address">address:</label>
        <input name="address" onChange={handleChange} value={address} />

        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createCampus: (campus) => dispatch(createCampusThunk(campus, history)),
});

export default connect(null, mapDispatchToProps)(CreateCampus);
