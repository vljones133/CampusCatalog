import React, { Component } from 'react';
import { updateCampusThunk } from '../redux/campuses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UpdateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCampus(id);
  }

  componentWillUnmount() {
    this.props.clearCampus();
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.updateCampus({ ...this.state });
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
      <form id="create-form" onSubmit={handleSubmit}>
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

const mapDispatchToProps = (dispatch, { history }) => ({
  updateCampus: (campus) => dispatch(updateCampusThunk(campus, history)),
});

export default connect(null, mapDispatchToProps)(UpdateCampus);
