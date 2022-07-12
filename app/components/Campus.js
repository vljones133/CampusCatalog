import React from 'react';
import { connect } from 'react-redux';
import { fetchCampus, updateCampus } from '../redux/singleCampus';

class Campus extends React.Component {
  componentDidMount() {
    this.props.getCampus(this.props.match.params.id);
  }

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.match.params.candyId !== this.props.match.params.candyId) {
  //       this.props.fetchSingleCandy(this.props.match.params.candyId);
  //     }
  //   }

  render() {
    const { campus, updateCampus } = this.props;
    console.log(`**********CAMPUS: ${campus}**********`);
    console.dir(campus);
    const students = campus.students;
    // console.log(`**********STUDENTS: ${students}**********`);
    return (
      <div key={campus.id}>
        <img src={campus.imageUrl} />
        <h2>{campus.name}</h2>
        <p>{campus.address}</p>
        <p>{campus.description}</p>
        <h3>Student's Enrolled:</h3>
        <ul>
          {students ? (
            students.map((student) => {
              return (
                <li key={student.id}>
                  {student.firstName} {student.lastName}
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
  updateCampus: (id, campus) => dispatch(updateCampus(id, campus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
