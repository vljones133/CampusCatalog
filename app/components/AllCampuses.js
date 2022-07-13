import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from '../redux/campuses';
import CreateCampus from './CreateCampus';

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
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
        <aside>
          <CreateCampus />
        </aside>
        <section id="campuses" className="column">
          {campuses.map((campus) => {
            return (
              <div className="campus" key={campus.id}>
                <div className="column">
                  <h3>
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
});

export default connect(mapState, mapDispatch)(AllCampuses);
