import React, { Component } from 'react';
import {
  fetchStudent,
  setStudent,
  updateStudentThunk,
} from '../redux/singleStudent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UpdateStudent extends Component {
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.updateStudent({ ...this.props.student, ...this.state });
    const form = document.getElementById('update-form');
    form.childNodes.forEach((input) => {
      input.value = '';
    });
  };

  render() {
    const { firstName, lastName, email, gpa } = this.props.student;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="update-form" onSubmit={handleSubmit}>
        <h3>Update student here:</h3>
        <label htmlFor="firstName">First name:</label>
        <input
          name="firstName"
          onChange={handleChange}
          defaultValue={firstName}
        />

        <label htmlFor="lastName">Last name:</label>
        <input
          name="lastName"
          onChange={handleChange}
          defaultValue={lastName}
        />

        <label htmlFor="email">Email:</label>
        <input name="email" onChange={handleChange} defaultValue={email} />

        <label htmlFor="gpa">GPA:</label>
        <input name="gpa" onChange={handleChange} defaultValue={gpa} />

        <button type="submit">Submit</button>
        <Link to="/students">Cancel</Link>
      </form>
    );
  }
}

const mapStateToProps = ({ student }) => ({
  student,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateStudent: (student) => dispatch(updateStudentThunk(student, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
