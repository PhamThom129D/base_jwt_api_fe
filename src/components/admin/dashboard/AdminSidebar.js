function AdminSidebar({ activeTab, setActiveTab }) {
  const menu = [
    { key: 'users', label: 'Quản lý người dùng' },
    { key: 'products', label: 'Quản lý sản phẩm' },
    { key: 'orders', label: 'Quản lý đơn hàng' },
    { key: 'account', label: 'Thông tin tài khoản' }
  ];

  return (
    <div className="admin-sidebar">
      <h3>Admin Menu</h3>
      <ul>
        {menu.map(item => (
          <li
            key={item.key}
            className={activeTab === item.key ? 'active' : ''}
            onClick={() => setActiveTab(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSidebar;
