import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DemoFetchApi from './components/DemoFetchApi';
import DemoAxios from './components/DemoAxios';

function App() {
  return (
    <div className="App">
      <DemoFetchApi />
      <DemoAxios />
    </div>
  );
}

export default App;
