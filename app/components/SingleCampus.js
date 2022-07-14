import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampus } from '../redux/singleCampus';
import { updateStudentThunk } from '../redux/singleStudent';
import UpdateCampus from './UpdateCampus';

class Campus extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCampus(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.campus.id !== this.props.campus.id) {
      this.props.getCampus(this.props.campus.id);
    }
  }

  render() {
    const { campus } = this.props;
    const students = campus.students;

    const unregisterStudent = (student) => {
      this.props.updateStudent({
        ...student,
        campusId: null,
      });
    };

    return (
      <main className="singlePage">
        <aside>
          <UpdateCampus />
        </aside>
        <section key={campus.id}>
          <img src={campus.imageUrl} alt="image of campus" />
          <h2>{campus.name}</h2>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <h3>Student's Enrolled:</h3>
          <ul>
            {students && students.length > 0 ? (
              students.map((student) => {
                return (
                  <li key={student.id}>
                    <button
                      type="button"
                      onClick={() => unregisterStudent(student, campus)}
                    >
                      Unregister
                    </button>
                    <Link to={`/students/${student.id}`}>
                      {student.firstName} {student.lastName}
                    </Link>
                  </li>
                );
              })
            ) : (
              <p>Sorry, no students to see yet!</p>
            )}
          </ul>
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ campus }) => ({
  campus,
});

const mapDispatchToProps = (dispatch) => ({
  getCampus: (id) => dispatch(fetchCampus(id)),
  updateStudent: (student) => dispatch(updateStudentThunk(student)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
