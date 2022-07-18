import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../redux/students';
import MappedStudent from './MappedStudent';

export class AllStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectedStudents: 'all',
    };
  }

  componentDidMount() {
    this.props.getStudents();
    this.setState({ loading: false });
  }

  selectStudents = (evt) => {
    this.setState({
      selectedStudents: evt.target.value,
    });
  };

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

    const filteredStudents = () => {
      const selected = this.state.selectedStudents;
      return this.props.students.filter((student) => {
        if (selected === 'all') return student;
        if (selected === 'unregistered') return student.campusId === null;
      });
    };

    const MapStudents = () => {
      return filteredStudents().map((student) => (
        <MappedStudent key={student.id} student={student} />
      ));
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
                <option defaultValue="lastName">Sort by</option>
                <option value="lastName">Last name</option>
                <option value="gpa">GPA</option>
              </select>

              <select
                className="custom-select"
                value={this.state.selectedStudents}
                onChange={this.selectStudents}
              >
                <option defaultValue="all">Filter by</option>
                <option value="all">All Students</option>
                <option value="unregistered">Unregistered</option>
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
});

export default connect(mapState, mapDispatch)(AllStudents);
