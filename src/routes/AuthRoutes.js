import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import RedirectPage from '../pages/RedirectWithRole';

const authRoutes = [
  <Route key="login" path="/" element={<LoginPage />} />,
  <Route key="login2" path="/login" element={<LoginPage />} />,
  <Route key="register" path="/register" element={<RegisterPage />} />,
  <Route key="redirect" path="/redirect-with-role" element={<RedirectPage />} />
];

export default authRoutes;
