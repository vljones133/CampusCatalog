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
      description: '',
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
    this.setState({
      name: '',
      address: '',
      description: '',
    });
  };

  render() {
    const { name, address, description } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form
        id="create-form"
        className="needs-validation"
        onSubmit={handleSubmit}
      >
        <h2>Add a new campus here:</h2>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={name}
            required
          />
          <div className="invalid-feedback">Please enter a name.</div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            name="address"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={address}
            required
          />
          <div className="invalid-feedback">Please enter an address.</div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            className="form-control"
            onChange={handleChange}
            value={description}
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link
          to="/campuses"
          type="button"
          className="btn btn-outline-secondary"
        >
          Cancel
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createCampus: (campus) => dispatch(createCampusThunk(campus, history)),
});

export default connect(null, mapDispatchToProps)(CreateCampus);
