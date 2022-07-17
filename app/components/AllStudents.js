import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents, deleteStudentThunk } from '../redux/students';

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
    const loading = (
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

    const { students } = this.props;

    const MapStudents = () => {
      return students.map((student) => {
        return (
          <div className="col" key={student.id}>
            <div className="card shadow-sm">
              <img
                className="card-img-top"
                src={student.imageUrl}
                alt="image of student"
              />
              <div className="card-body">
                <h4 className="card-title">
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                </h4>

                <div className="d-flex justify-content-between align-items-center bottom-buttons">
                  <div className="btn-group">
                    <Link
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      to={`/students/${student.id}`}
                    >
                      View
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.props.deleteStudent(student.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    };

    return (
      <div className="all-students w-100">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">
                {this.state.loading && loading}All Students
              </h1>

              <Link to="/students/create" className="btn btn-primary my-2">
                Create a new student
              </Link>
              <br />
              <select
                className="custom-select"
                onChange={(e) => this.sortStudents(e.target.value)}
              >
                <option defaultValue="default">Sort by</option>
                <option value="lastName">Last name</option>
                <option value="gpa">GPA</option>
              </select>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {students ? <MapStudents /> : <h3>No Students</h3>}
            </div>
          </div>
        </div>
        <a href="#" id="toTopBtn" className="cd-top" />
      </div>
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
