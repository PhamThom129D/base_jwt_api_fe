import ProductPage from "../../../pages/admin/ListProduct";

function AdminContent({ tab }) {
  switch (tab) {
    case 'users':
      return <p>📋 Danh sách người dùng</p>;
    case 'products':
      return <ProductPage />;
    case 'orders':
      return <p>🧾 Danh sách đơn hàng</p>;
    case 'account':
      return <p>👤 Thông tin tài khoản Admin</p>;
    default:
      return <p>Chọn chức năng</p>;
  }
}

export default AdminContent;
