import React from 'react';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path="/" exact element={<Header/>} >
         </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
