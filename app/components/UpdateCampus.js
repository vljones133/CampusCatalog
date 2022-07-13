import React, { Component } from 'react';
import { updateCampusThunk } from '../redux/campuses';
import { fetchCampus, setCampus } from '../redux/singleCampus';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//find and fix 500 error
//clear form upon submit
//update page
class UpdateCampus extends Component {
  componentDidMount() {
    try {
      // const campus = this.props.getCampus(this.props.campus.id);
      const campus = this.props.campus;
      console.log(`**********campus: ${campus}**********`);
      console.dir(campus);
    } catch (error) {
      console.log(`**********COMPONENT-DID-MOUNT: ${error}**********`);
      console.error(error);
    }
  }

  componentWillUnmount() {
    this.props.clearCampus();
  }

  // componentDidUpdate(prevProps) {
  //   // if (prevProps.campus.id !== this.props.campus.id) {
  //   //   this.setState({
  //   //     name: this.props.campus.name || '',
  //   //     address: this.props.campus.address || '',
  //   //     description: this.props.campus.description || '',
  //   //   });
  //   // }
  //   // if (prevProps.campus.id !== this.props.campus.id) {
  //   //   this.props.getCampus(this.props.campus.id);
  //   // }
  // }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.updateCampus({ ...this.props.campus, ...this.state });
    // this.props.clearCampus();
    this.setState({
      name: '',
      address: '',
      description: '',
    });
  };

  render() {
    const { name, address, description } = this.props.campus;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="update-form" onSubmit={handleSubmit}>
        <h3>Update campus here:</h3>
        <label htmlFor="name">Name:</label>
        <input name="name" onChange={handleChange} defaultValue={name} />

        <label htmlFor="address">Address:</label>
        <input name="address" onChange={handleChange} defaultValue={address} />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          onChange={handleChange}
          defaultValue={description}
        />

        <button type="submit">Submit</button>
        <Link to="/campuses">Cancel</Link>
      </form>
    );
  }
}

const mapStateToProps = ({ campus }) => ({
  campus,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateCampus: (campus) => dispatch(updateCampusThunk(campus, history)),
  getCampus: (id) => dispatch(fetchCampus(id)),
  clearCampus: () => dispatch(setCampus({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);
