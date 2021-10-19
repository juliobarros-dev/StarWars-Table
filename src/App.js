import React from 'react';
import PlanetsProvider from './context/Provider';
import HomePage from './pages/Home';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <HomePage />
    </PlanetsProvider>
  );
}

export default App;
