function AdminHeader({ username, darkMode, setDarkMode }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="admin-header">
      <span>👤 Xin chào, {username}</span>
      <div>
        <label style={{ marginRight: '15px' }}>
          🌙
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />{' '}
          Dark mode
        </label>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    </div>
  );
}

export default AdminHeader;
