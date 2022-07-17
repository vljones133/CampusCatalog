import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampus } from '../redux/singleCampus';
import { updateCampusStudentsThunk } from '../redux/singleStudent';
import UpdateCampus from './UpdateCampus';
import CampusNotFound from './CampusNotFound';

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

    if (campus) {
      return (
        <section key={campus.id} className="single-page">
          <div className="row featurette" key={campus.id}>
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                {campus.name}
              </h2>
              <address>{campus.address}</address>

              <p className="lead">{campus.description}</p>

              <hr className="featurette-divider" />

              <h5 className="featurette-heading fw-normal lh-1">
                Student's Enrolled:
              </h5>
              <ul className="list-group list-group-flush">
                {students && students.length > 0 ? (
                  students.map((student) => {
                    return (
                      <li key={student.id} className="list-group-item">
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => unregisterStudent(student, campus)}
                        >
                          Unregister
                        </button>
                        <Link
                          to={`/students/${student.id}`}
                          class="list-group-item list-group-item-action"
                        >
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
            <div className="col-md-5 order-md-1">
              <img
                src={campus.imageUrl}
                alt="image of campus"
                className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              />

              <div className="accordion accordion-flush" id="accordionFlush">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Edit campus
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlush"
                  >
                    <div className="accordion-body">
                      <UpdateCampus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <CampusNotFound />;
    }
  }
}

const mapState = ({ campus }) => ({
  campus,
});

const mapDispatch = (dispatch) => ({
  getCampus: (id) => dispatch(fetchCampus(id)),
  updateCampusStudents: (student) =>
    dispatch(updateCampusStudentsThunk(student)),
});

export default connect(mapState, mapDispatch)(Campus);
