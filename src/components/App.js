import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import MapComponent from './MapComponent';

const App = (props) => {
    return (
        <div>
      <IndexLink to="/">Home</IndexLink> | <Link to="/About">About</Link>
      <br/>
      <MapComponent></MapComponent>
      {props.children}
    </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
