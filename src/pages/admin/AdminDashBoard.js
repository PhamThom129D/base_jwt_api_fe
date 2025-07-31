import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminContent from '../../components/admin/AdminContent';
import '../../assets/css/admin/dashboard.css'; 

function AdminDashboard() {
  const { isLoggedIn, username, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('users');
  const [darkMode, setDarkMode] = useState(false);

  if (!isLoggedIn || !isAdmin) return <p>Vui lòng đăng nhập bằng tài khoản Admin</p>;

  return (
    <div className={darkMode ? 'admin-dashboard dark' : 'admin-dashboard'}>
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="admin-main">
        <AdminHeader
          username={username}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <AdminContent tab={activeTab} />
      </div>
    </div>
  );
}

export default AdminDashboard;
