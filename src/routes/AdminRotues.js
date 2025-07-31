import React from 'react';
import { Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashBoard';

const adminRoutes = [
     <Route key="home-admin" path="/home-admin" element={<AdminDashboard />} />,
]
 

export default adminRoutes;
