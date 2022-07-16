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
// import AllCampusesBootstrap from './AllCampusesBootstrap';

const Routes = () => {
  return (
    <Router>
      <div className="w-100">
        <header>
          <div>
            {/* <h3 className="">Welcome!</h3> */}
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link
                to="/"
                className="float-md-start mb-0 nav-link fw-bold py-1 px-0 active"
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
      </div>
    </Router>
    // <Router>
    //   <div>
    //     <nav>
    //       <Link to="/">Welcome!</Link>
    //       <Link to="/campuses">Campuses</Link>
    //       <Link to="/students">Students</Link>
    //     </nav>
    //     <main>
    //       <Switch>
    //         <Route exact path="/">
    //           <div>
    //             <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
    //             <p>
    //               This seems like a nice place to get started with some Routes!
    //             </p>
    //           </div>
    //         </Route>
    //         <Route exact path="/campuses" component={AllCampuses} />
    //         <Route exact path="/students" component={AllStudents} />

    //         <Route path="/campuses/create" component={CreateCampus} />
    //         <Route path="/students/create" component={CreateStudent} />

    //         <Route exact path="/campuses/:id" component={SingleCampus} />
    //         <Route exact path="/students/:id" component={SingleStudent} />

    //         <Route component={NotFound} />
    //       </Switch>
    //     </main>
    //   </div>
    // </Router>
  );
};

export default Routes;
