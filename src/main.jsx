import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NotesApp from './components/NotesApp.jsx';
import './assets/css/bootstrap.css';
import './assets/js/bootstrap.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <NotesApp />
    </Router>
  </React.StrictMode>
);
