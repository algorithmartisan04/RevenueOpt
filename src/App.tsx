import React from 'react';
import Dashboard from './components/Dashboard';
import NudgeControl from './components/NudgeControl';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard />
      <NudgeControl />
    </div>
  );
};

export default App;
