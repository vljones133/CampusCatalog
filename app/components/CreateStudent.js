import React, { Component } from 'react';
import { createStudentThunk } from '../redux/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.createStudent({ ...this.state });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
    });
  };

  render() {
    const { firstName, lastName, email, gpa } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="create-form" onSubmit={handleSubmit}>
        <h3>Add a new student here:</h3>
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" onChange={handleChange} value={firstName} />

        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" onChange={handleChange} value={lastName} />

        <label htmlFor="email">Email:</label>
        <input name="email" onChange={handleChange} value={email} />

        <label htmlFor="gpa">GPA:</label>
        <input name="gpa" onChange={handleChange} value={gpa} />

        <button type="submit">Submit</button>
        <Link to="/students">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudentThunk(student, history)),
});

export default connect(null, mapDispatchToProps)(CreateStudent);
