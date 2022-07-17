import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudent } from '../redux/singleStudent';
import UpdateStudent from './UpdateStudent';
import StudentNotFound from './StudentNotFound';

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

    if (student) {
      return (
        <section key={student.id} className="single-page">
          <div className="row featurette" key={student.id}>
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                {student.firstName} {student.lastName}
              </h2>

              <p>
                <a
                  href={'mailto:' + student.email}
                  className="email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {student.email}
                </a>
              </p>
              <p>GPA: {student.gpa}</p>

              <p>
                {campus ? (
                  <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                ) : (
                  'Sorry, no campus to see yet!'
                )}
              </p>

              <hr className="featurette-divider" />
            </div>

            <div className="col-md-5 order-md-1">
              <img
                src={student.imageUrl}
                alt="image of student"
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
                      Edit student
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlush"
                  >
                    <div className="accordion-body">
                      <UpdateStudent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <StudentNotFound />;
    }
  }
}

const mapStateToProps = ({ student }) => ({
  student,
});

const mapDispatchToProps = (dispatch) => ({
  getStudent: (id) => dispatch(fetchStudent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
