import React, { useEffect } from 'react';


// == Import
import Page from './Page';

// import './styles.css';

// == Composant
const App = ({ loadMonsterType }) => {
  useEffect(() => {
    loadMonsterType();
    
  }, []);

  return (

    <div className="app">
      <Page />
    </div>
  );
};

// == Export
export default App;