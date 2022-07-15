import React from 'react';
import { Link } from 'react-router-dom';
import CreateCampus from './CreateCampus';

const CampusNotFound = () => (
  <main>
    <div className="column">
      <h2>
        Oh no, we couldn't find that campus!
        <br /> Check out our catalog of other campuses.
      </h2>
      <Link to="/">Find a school</Link>
      <div>
        <img
          src="https://images.unsplash.com/photo-1503453363464-743ee9ce1584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          alt=""
        />
      </div>
    </div>
    <div className="column">
      <CreateCampus />
    </div>
  </main>
);

export default CampusNotFound;
