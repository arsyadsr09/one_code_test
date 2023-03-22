import * as React from 'react';
import {BrowserRouter, Routes as RoutesDom, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import Profile from '../pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </RoutesDom>
    </BrowserRouter>
  );
}

export default Routes;
