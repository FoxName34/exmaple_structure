import React, { useEffect, useState } from 'react';

import { fetchData } from './services/api/Api';

import logo from "./logo.svg"
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetchData('data');
        setData(response);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>{data}</h1>
        <ul>
          {/* {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))} */}
        </ul>
      </main>
    </div>
  );
}

export default App;
