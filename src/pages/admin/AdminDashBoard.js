import React, { useState, useEffect } from 'react';
import useAuth from '../../hook/useAuth';
import AdminSidebar from '../../components/admin/dashboard/AdminSidebar';
import AdminHeader from '../../components/admin/dashboard/AdminHeader';
import AdminContent from '../../components/admin/dashboard/AdminContent';

function AdminDashboard() {
  const { isLoggedIn, username, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('users');

  // Set margin: 0 cho body
  useEffect(() => {
    document.body.style.margin = '0';
    return () => {
      document.body.style.margin = ''; // khôi phục khi unmount nếu cần
    };
  }, []);

  if (!isLoggedIn || !isAdmin) return <p>Vui lòng đăng nhập bằng tài khoản Admin</p>;

  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1 }}>
        <AdminHeader username={username} />
        <AdminContent tab={activeTab} />
      </div>
    </div>
  );
}

export default AdminDashboard;
