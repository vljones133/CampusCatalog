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
      <form
        id="update-form"
        className="needs-validation"
        onSubmit={handleSubmit}
      >
        <h3 className="featurette-heading fw-normal lh-1">
          Update student here:
        </h3>

        <div className="form-group">
          <label htmlFor="firstName">First name:</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={firstName}
            required
          />
          <div className="invalid-feedback">Please enter a first name.</div>
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
          <div className="invalid-feedback">Please enter a last name.</div>
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
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
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

const mapStateToProps = ({ student }) => ({
  student,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateStudent: (student) => dispatch(updateStudentThunk(student, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
