import React, { useState } from 'react';
import './App.css';

function App() {
  const [checkList, setList] = useState([]);
  return (
    <div>
      <div>
        <p>Hello World</p>
      </div>
      <div>
        {checkList.map(check => {
          return (
            <div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
