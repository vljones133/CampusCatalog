import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampus } from '../redux/singleCampus';

class Campus extends React.Component {
  componentDidMount() {
    this.props.getCampus(this.props.match.params.id);
  }

  render() {
    const { campus } = this.props;
    const students = campus.students;
    return (
      <div key={campus.id}>
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
      </div>
    );
  }
}

const mapStateToProps = ({ campus }) => ({
  campus,
});

const mapDispatchToProps = (dispatch) => ({
  getCampus: (id) => dispatch(fetchCampus(id)),
  // updateCampus: (id, campus) => dispatch(updateCampus(id, campus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
