import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudentThunk } from '../redux/students';

const MappedStudentView = ({ student, deleteStudent }) => (
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
        <p className="gold-text">GPA: {student.gpa}</p>

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
            onClick={() => deleteStudent(student.id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatch = (dispatch) => ({
  deleteStudent: (student) => dispatch(deleteStudentThunk(student, history)),
});

export default connect(null, mapDispatch)(MappedStudentView);
