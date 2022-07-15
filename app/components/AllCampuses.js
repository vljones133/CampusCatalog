import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses, deleteCampusThunk } from '../redux/campuses';
import CreateCampus from './CreateCampus';
import store from '../store';

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

    const { campuses } = this.props;
    return (
      <main className="listPage">
        {this.state.loading && <h1>Loading...</h1>}
        <aside>
          <CreateCampus store={store} />
        </aside>
        <section id="campuses" className="column">
          campuses ?
          {campuses.map((campus) => {
            return (
              <div className="campus" key={campus.id}>
                <div className="column">
                  <h3>
                    <button
                      type="button"
                      className="remove"
                      onClick={() => this.props.deleteCampus(campus.id)}
                    >
                      X
                    </button>
                    <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                  </h3>
                  <p>{campus.description}</p>
                  <p>{campus.address}</p>
                </div>
                <div className="column">
                  <img src={campus.imageUrl} alt="image of campus" />
                </div>
                <br />
              </div>
            );
          })}
          : <h3>No Campuses</h3>
        </section>
        <button id="toTop" type="button" onClick={goToTop}>
          ^Top
        </button>
      </main>
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
