import React from 'react';
import { Routes } from 'react-router-dom';
import authRoutes from './AuthRoutes';
import userRoutes from './UserRotues';
import adminRoutes from './AdminRotues';


function AppRouters() {
  return (
    <Routes>
      {[
        ...authRoutes, 
        ...userRoutes, 
        ...adminRoutes
        ]}
    </Routes>
  );
}

export default AppRouters;
