import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="single-page not-found">
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">
          Oops! Lost and confused?
          <br /> Let us help you find your perfect school.
        </h2>

        <Link to="/campuses">Find a school</Link>
      </div>

      <div className="col-md-5 order-md-1">
        <img
          src="https://images.unsplash.com/photo-1560270579-d515a443eb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          alt="not found"
          className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        />
      </div>
    </div>
  </section>
);

export default NotFound;
