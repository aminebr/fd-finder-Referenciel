// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstInterface from './FirstInterface';
import SecondInterface from './SecondInterface';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<FirstInterface />} />
          <Route path="/second-interface/:technologyName" element={<SecondInterface />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
