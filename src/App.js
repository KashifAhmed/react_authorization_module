import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import SignIn from './lib/authorization/signin'
import SignUp from './lib/authorization/signup'

function App() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Router >
          <Routes >
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/register" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
