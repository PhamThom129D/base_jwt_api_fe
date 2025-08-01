import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

function AdminHeader({ username }) {
  const { darkMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div style={{
      padding: '10px 20px',
      backgroundColor: darkMode ? '#222' : '#eee',
      color: darkMode ? '#fff' : '#000',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span>👤 Xin chào, {username}</span>
      <div>
        <button onClick={toggleTheme} style={{ marginRight: '10px' }}>
          {darkMode ? '🌙 Dark' : '🌞 Light'}
        </button>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    </div>
  );
}

export default AdminHeader;
