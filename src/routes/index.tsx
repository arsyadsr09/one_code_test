import * as React from 'react';
import {BrowserRouter, Routes as RoutesDom, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </RoutesDom>
    </BrowserRouter>
  );
}

export default Routes;
