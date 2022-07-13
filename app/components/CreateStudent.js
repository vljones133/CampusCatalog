import React, { Component } from 'react';
import { createStudentThunk } from '../redux/singleStudent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      studentFirstName: '',
      studentLastName: '',
      studentEmail: '',
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
    this.props.createStudent({ ...this.state });
  };

  render() {
    const { studentFirstName, studentLastName, studentEmail } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="student-form" onSubmit={handleSubmit}>
        <label htmlFor="studentFirstName">First Name:</label>
        <input
          name="studentFirstName"
          onChange={handleChange}
          value={studentFirstName}
        />

        <label htmlFor="studentLastName">Last Name:</label>
        <input
          name="studentLastName"
          onChange={handleChange}
          value={studentLastName}
        />

        <label htmlFor="studentEmail">Email:</label>
        <input
          name="studentEmail"
          onChange={handleChange}
          value={studentEmail}
        />

        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudentThunk(student, history)),
});

export default connect(null, mapDispatchToProps)(CreateStudent);
