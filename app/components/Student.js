import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudent } from '../redux/singleStudent';
import UpdateStudent from './UpdateStudent';

class Student extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStudent(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student.id !== this.props.student.id) {
      this.props.getStudent(this.props.student.id);
    }
  }

  render() {
    const { student } = this.props;
    const campus = student.campus;
    return (
      <main className="singlePage">
        <aside>
          {/* <UpdateStudent student={student} /> */}
          <UpdateStudent />
        </aside>
        <section key={student.id}>
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
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ student }) => ({
  student,
});

const mapDispatchToProps = (dispatch) => ({
  getStudent: (id) => dispatch(fetchStudent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
