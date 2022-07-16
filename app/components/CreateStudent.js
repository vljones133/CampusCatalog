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
      <form
        id="create-form"
        className="needs-validation"
        onSubmit={handleSubmit}
      >
        <h3>Add a new student here:</h3>

        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={firstName}
            required
          />
          <div className="invalid-feedback">Please enter a name.</div>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={lastName}
            required
          />
          <div className="invalid-feedback">Please enter a name.</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            className="form-control"
            onChange={handleChange}
            value={email}
            required
          />
          <div className="invalid-feedback">Please enter a name.</div>
        </div>

        <div className="form-group">
          <label htmlFor="gpa">GPA:</label>
          <input
            name="gpa"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={gpa}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link
          to="/students"
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
  createStudent: (student) => dispatch(createStudentThunk(student, history)),
});

export default connect(null, mapDispatchToProps)(CreateStudent);
