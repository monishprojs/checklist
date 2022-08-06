import React, { useState } from 'react';
import './App.css';
import CheckList from './components/checkList';

function App() {
  const [checkList, setList] = useState([]);
  return (
    <div>
      <div className="title">
        <p>Hello World</p>
      </div>
      <div>
        <CheckList></CheckList>
      </div>
    </div>
  );
}

export default App;
