import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import CreateCampus from './CreateCampus';
import CreateStudent from './CreateStudent';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Welcome!</Link>
          <Link to="/campuses">Campuses</Link>
          <Link to="/students">Students</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <div>
                <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
                <p>
                  This seems like a nice place to get started with some Routes!
                </p>
              </div>
            </Route>
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/campuses/create" component={CreateCampus} />
            <Route path="/students/create" component={CreateStudent} />
            <Route path="/campuses/:id" component={SingleCampus} />
            <Route path="/students/:id" component={SingleStudent} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
