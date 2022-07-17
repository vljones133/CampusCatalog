import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses, deleteCampusThunk } from '../redux/campuses';

export class AllCampuses extends React.Component {
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

    const loading = (
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

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
                <h4 className="card-title">{campus.name}</h4>

                <address className="card-subtitle">{campus.address}</address>
                <p className="card-text">{campus.description}</p>
                <div className="d-flex justify-content-between align-items-center bottom-buttons">
                  <div className="btn-group">
                    <Link
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      to={`/campuses/${campus.id}`}
                    >
                      View
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
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
      <div className="all-campuses w-100">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">
                {this.state.loading && loading}All Campuses
              </h1>
              <p>
                <Link to="/campuses/create" className="btn btn-primary my-2">
                  Create a new campus
                </Link>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {campuses ? <MapCampuses /> : <h3>No Campuses</h3>}
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

export default connect(mapState, mapDispatch)(AllCampuses);
