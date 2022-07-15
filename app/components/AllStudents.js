import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents, deleteStudentThunk } from '../redux/students';
import CreateStudent from './CreateStudent';
import store from '../store';

export class AllStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.getStudents();
    this.setState({ loading: false });
  }

  sortStudents = (type) => {
    const types = {
      lastName: 'lastName',
      gpa: 'gpa',
    };
    const sortProperty = types[type];
    const { students } = this.props;

    if (sortProperty === 'lastName') {
      this.setState({
        ...students.sort((a, b) => {
          return a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0;
        }),
      });
    } else {
      this.setState({
        ...students.sort((a, b) => b[sortProperty] - a[sortProperty]),
      });
    }
  };

  render() {
    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: 'smooth',
      });
    };

    const { students } = this.props;

    const MapStudents = () => {
      return students.map((student) => {
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
      });
    };

    return (
      <main className="listPage">
        {this.state.loading && <h1>Loading...</h1>}

        <aside>
          <CreateStudent store={store} />
        </aside>
        <section id="students" className="column">
          {students ? (
            <div>
              <select
                defaultValue="DEFAULT"
                onChange={(e) => this.sortStudents(e.target.value)}
              >
                <option value="DEFAULT" disabled>
                  None
                </option>
                <option value="lastName">Last name</option>
                <option value="gpa">GPA</option>
              </select>
              <MapStudents />
            </div>
          ) : (
            <h3>No Students</h3>
          )}
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
