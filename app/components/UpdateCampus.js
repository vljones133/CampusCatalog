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
      <form id="update-form" onSubmit={handleSubmit}>
        <h3>Update campus here:</h3>
        <label htmlFor="name">Name:</label>
        <input name="name" onChange={handleChange} value={name} />

        <label htmlFor="address">Address:</label>
        <input name="address" onChange={handleChange} value={address} />

        <label htmlFor="description">Description:</label>
        <input name="description" onChange={handleChange} value={description} />

        <button type="submit">Submit</button>
        <Link to="/campuses">Cancel</Link>
      </form>
    );
  }
}

const mapStateToProps = ({ campus }) => ({
  campus,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateCampus: (campus) => dispatch(updateCampusThunk(campus, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);
