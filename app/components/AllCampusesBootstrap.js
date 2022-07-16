import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses, deleteCampusThunk } from '../redux/campuses';
import CreateCampus from './CreateCampus';
import store from '../store';

export class AllCampusesBootstrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.getCampuses();
    this.setState({ loading: false });
  }

  render() {
    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: 'smooth',
      });
    };

    const { campuses } = this.props;

    const MapCampuses = () => {
      return campuses.map((campus) => {
        return (
          <div className="col" key={campus.id}>
            <div className="card shadow-sm">
              <img
                className="card-img-top"
                src={campus.imageUrl}
                alt="image of campus"
              />
              <div className="card-body">
                <h3>{campus.name}</h3>
                <p className="card-text">
                  {campus.address} <br />
                  {campus.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      to={`/campuses/${campus.id}`}
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <button
                    type="button"
                    className="remove"
                    onClick={() => this.props.deleteCampus(campus.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    };

    return (
      <div className="w-100">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">
                {this.state.loading && 'Loading...'}All Campuses
              </h1>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Create a new campus
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {/* <aside>
                <CreateCampus store={store} />
              </aside> */}

              {campuses ? <MapCampuses /> : <h3>No Campuses</h3>}

              {/* <button id="toTop" type="button" onClick={goToTop}>
                ^Top
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = ({ campuses }) => ({
  campuses,
});

const mapDispatch = (dispatch) => ({
  getCampuses: () => dispatch(fetchCampuses()),
  deleteCampus: (campus) => dispatch(deleteCampusThunk(campus, history)),
});

export default connect(mapState, mapDispatch)(AllCampusesBootstrap);
