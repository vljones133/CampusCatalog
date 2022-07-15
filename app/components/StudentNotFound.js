import React from 'react';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent';

const StudentNotFound = () => (
  <main>
    <div className="column">
      <h2>
        Where did they go?
        <br />
        Try checking our list of students.
      </h2>
      <Link to="/">Find a student</Link>
      <div>
        <img
          src="https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt=""
        />
      </div>
    </div>
    <div className="column">
      <CreateStudent />
    </div>
  </main>
);

export default StudentNotFound;
