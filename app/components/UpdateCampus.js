import React, { Component } from 'react';
import { updateCampusThunk } from '../redux/singleCampus';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UpdateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.campus.name,
      address: props.campus.address,
      description: props.campus.description,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.campus.id !== this.props.campus.id) {
      this.setState({
        name: this.props.campus.name || '',
        address: this.props.campus.address || '',
        description: this.props.campus.description || '',
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.updateCampus({ ...this.props.campus, ...this.state });

    const form = document.getElementById('update-form');
    form.childNodes.forEach((input) => {
      input.value = '';
    });
  };

  render() {
    const { name, address, description } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form
        id="update-form"
        className="needs-validation"
        onSubmit={handleSubmit}
      >
        <h3 className="featurette-heading fw-normal lh-1">
          Update campus here:
        </h3>

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

        <div className="form-group">
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
        </div>
      </form>
    );
  }
}

const mapState = ({ campus }) => ({
  campus,
});

const mapDispatch = (dispatch, { history }) => ({
  updateCampus: (campus) => dispatch(updateCampusThunk(campus, history)),
});

export default connect(mapState, mapDispatch)(UpdateCampus);
