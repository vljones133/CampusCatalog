import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCampusThunk, fetchCampus } from '../redux/singleCampus';
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

  // unregisterStudent = (student, campus) => {
  //   console.log(`**********UNREGISTER-STUDENT**********`);
  //   this.setState({});
  // };

  render() {
    const { campus } = this.props;
    const students = campus.students;
    return (
      <main className="singlePage">
        <aside>
          <UpdateCampus campus={campus} />
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
                    {/* <button
                      type="button"
                      onClick={this.unregisterStudent(student, campus)}
                    >
                      Unregister
                    </button> */}
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
  updateCampus: (id, campus) => dispatch(updateCampusThunk(id, campus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
