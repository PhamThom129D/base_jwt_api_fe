import React from 'react';
import { Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashBoard';
import ProductPage from '../pages/admin/ListProduct';

const adminRoutes = [
     <Route key="home-admin" path="/home-admin" element={<AdminDashboard />} />,
     <Route key="manage-product" path="/manage-product/list" element={<ProductPage />} />
]
 

export default adminRoutes;
