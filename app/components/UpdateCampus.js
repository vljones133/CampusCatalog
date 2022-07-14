import React, { Component } from 'react';
import { updateCampusThunk } from '../redux/singleCampus';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UpdateCampus extends Component {
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.getCampus(id);
  // }

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
    const { name, address, description } = this.props.campus;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="update-form" onSubmit={handleSubmit}>
        <h3>Update campus here:</h3>
        <label htmlFor="name">Name:</label>
        <input name="name" onChange={handleChange} defaultValue={name} />

        <label htmlFor="address">Address:</label>
        <input name="address" onChange={handleChange} defaultValue={address} />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          onChange={handleChange}
          defaultValue={description}
        />

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
