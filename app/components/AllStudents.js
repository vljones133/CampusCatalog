import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../redux/students';
import CreateStudent from './CreateStudent';
import store from '../store';

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: 'smooth',
      });
    };

    const { students } = this.props;
    return (
      <main className="listPage">
        <aside>
          <CreateStudent store={store} />
        </aside>
        <section id="students" className="column">
          {students.map((student) => {
            return (
              <div className="student" key={student.id}>
                <div className="column">
                  <h3>
                    <button
                      type="button"
                      className="remove"
                      onClick={() => this.props.deleteStudent(student.id)}
                    >
                      X
                    </button>
                    <Link to={`/students/${student.id}`}>
                      {student.firstName} {student.lastName}
                    </Link>
                  </h3>
                </div>
                <div className="column">
                  <img src={student.imageUrl} alt="image of student" />
                </div>
                <br />
              </div>
            );
          })}
        </section>
        <button id="toTop" type="button" onClick={goToTop}>
          ^Top
        </button>
      </main>
    );
  }
}

const mapState = ({ students }) => ({
  students,
});

const mapDispatch = (dispatch) => ({
  getStudents: () => dispatch(fetchStudents()),
  deleteStudent: (student) => dispatch(deleteStudentThunk(student, history)),
});

export default connect(mapState, mapDispatch)(AllStudents);
