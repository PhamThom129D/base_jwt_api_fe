import React from 'react';
import { Route } from 'react-router-dom';
import UserDashboard from '../pages/user/HomeUserPage';

const userRoutes = [
      <Route key="home-user" path="/home-user" element={<UserDashboard />} />,
]
 

export default userRoutes;
