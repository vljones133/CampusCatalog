import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import CreateCampus from './CreateCampus';
import CreateStudent from './CreateStudent';
import NotFound from './NotFound';
import Home from './Home';

const Routes = () => {
  return (
    <Router>
      <div className="w-100">
        <header>
          <div>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link
                to="/"
                className="float-md-start mb-0 nav-link fw-bold py-1 px-0"
                aria-current="page"
              >
                Welcome!
              </Link>
              <Link to="/campuses" className="nav-link fw-bold py-1 px-0">
                Campuses
              </Link>
              <Link to="/students" className="nav-link fw-bold py-1 px-0">
                Students
              </Link>
            </nav>
          </div>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />

            <Route path="/campuses/create" component={CreateCampus} />
            <Route path="/students/create" component={CreateStudent} />

            <Route exact path="/campuses/:id" component={SingleCampus} />
            <Route exact path="/students/:id" component={SingleStudent} />

            <Route component={NotFound} />
          </Switch>
        </main>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3 mb-md-0 text-muted">
                &copy; 2022 Valerie Jones
              </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://github.com/vljones133"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://github.com/vljones133"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
