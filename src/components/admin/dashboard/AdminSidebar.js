import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

function AdminSidebar({ activeTab, setActiveTab }) {
  const [collapsed, setCollapsed] = useState(false);
  const { darkMode } = useTheme();

  const menu = [
    { key: 'users', label: '👥 Quản lý người dùng' },
    { key: 'products', label: '📦 Quản lý sản phẩm' },
    { key: 'orders', label: '🧾 Quản lý đơn hàng' },
    { key: 'account', label: '👤 Tài khoản' }
  ];

  const sidebarStyle = {
    width: collapsed ? '70px' : '300px',
    background: darkMode ? '#222' : '#f4f4f4',
    padding: '10px',
    height: '100vh',
    transition: 'width 0.3s',
    overflow: 'hidden',
    color: darkMode ? '#fff' : '#000',
  };

  const menuItemStyle = (active) => ({
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: active
      ? darkMode
        ? '#444'
        : '#ddd'
      : 'transparent',
    borderRadius: '4px',
    marginBottom: '5px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: darkMode ? '#fff' : '#000',
  });

  const toggleButtonStyle = {
    cursor: 'pointer',
    marginBottom: '10px',
    fontSize: '35px'
  };

  return (
    <div style={sidebarStyle}>
      <div style={toggleButtonStyle} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '☰' : '✖'}
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menu.map(item => (
          <li
            key={item.key}
            style={menuItemStyle(activeTab === item.key)}
            onClick={() => setActiveTab(item.key)}
            title={item.label}
          >
            {collapsed ? item.label.split(' ')[0] : item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSidebar;
