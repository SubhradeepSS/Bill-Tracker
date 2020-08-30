import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Bills from './components/BillComp'

function App() {
  return (
    <div className="App">
        <h1>Bill Tracker</h1>
        <Bills />
    </div>
  );
}

export default App;
