import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import Homepage from './views/Homepage';
import City from './views/City';

function App() {
  return (
    <Router>
      <Homepage path="/" />
      <City path="/lots/:_location" />
    </Router>
  );
}

export default App;
