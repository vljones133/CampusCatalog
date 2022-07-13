import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudent, updateStudent } from '../redux/singleStudent';

class Student extends React.Component {
  componentDidMount() {
    this.props.getStudent(this.props.match.params.id);
  }

  render() {
    const { student } = this.props;
    const campus = student.campus;
    return (
      <div key={student.id}>
        <img src={student.imageUrl} />
        <h2>
          {student.firstName} {student.lastName}
        </h2>
        <p>{student.email}</p>
        <p>GPA: {student.gpa}</p>
        <p>
          {campus ? (
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
          ) : (
            'Sorry, no campus to see yet!'
          )}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ student }) => ({
  student,
});

const mapDispatchToProps = (dispatch) => ({
  getStudent: (id) => dispatch(fetchStudent(id)),
  updateStudent: (id, student) => dispatch(updateStudent(id, student)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
