import React, { useState } from 'react';
import './App.css';
import CheckList from './components/checkList';

function App() {
  return (
    <div>
      <div className="title">
        <p>Your Personalized Checklist</p>
        <hr className="divider" />
      </div>
      <div>
        <CheckList></CheckList>
      </div>
    </div>
  );
}

export default App;
