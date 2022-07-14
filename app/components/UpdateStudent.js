import React, { Component } from 'react';
import { updateStudentThunk } from '../redux/singleStudent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.student.firstName,
      lastName: props.student.lastName,
      email: props.student.email,
      gpa: props.student.gpa,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student.id !== this.props.student.id) {
      this.setState({
        firstName: this.props.student.firstName || '',
        lastName: this.props.student.lastName || '',
        email: this.props.student.email || '',
        gpa: this.props.student.gpa || '',
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

    this.props.updateStudent({ ...this.props.student, ...this.state });

    const form = document.getElementById('update-form');
    form.childNodes.forEach((input) => {
      input.value = '';
    });
  };

  render() {
    const { firstName, lastName, email, gpa } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="update-form" onSubmit={handleSubmit}>
        <h3>Update student here:</h3>
        <label htmlFor="firstName">First name:</label>
        <input name="firstName" onChange={handleChange} value={firstName} />

        <label htmlFor="lastName">Last name:</label>
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

const mapStateToProps = ({ student }) => ({
  student,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateStudent: (student) => dispatch(updateStudentThunk(student, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
