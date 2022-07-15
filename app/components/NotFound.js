import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>
      Oops! Lost and confused?
      <br /> Let us help you find your perfect school.
    </h1>
    <Link to="/">Find a school</Link>
    <div>
      <img
        src="https://images.unsplash.com/photo-1560270579-d515a443eb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
        alt=""
      />
    </div>
  </div>
);

export default NotFound;
