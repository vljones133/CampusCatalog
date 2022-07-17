import React from 'react';
import { Link } from 'react-router-dom';
import CreateCampus from './CreateCampus';

const CampusNotFound = () => (
  <section className="single-page not-found">
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">
          Oh no, we couldn't find that campus!
          <br /> Check out our catalog of other campuses.
        </h2>

        <Link to="/campuses">Find a campus</Link>

        <hr className="featurette-divider" />

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
                Add a campus
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlush"
            >
              <div className="accordion-body">
                <CreateCampus />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 order-md-1">
        <img
          src="https://images.unsplash.com/photo-1503453363464-743ee9ce1584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          alt="not found"
          className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        />
      </div>
    </div>
  </section>
);

export default CampusNotFound;
