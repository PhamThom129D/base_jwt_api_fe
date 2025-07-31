import React from 'react';
import '../../../assets/css/admin/manageProduct.css'

function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="product-table-container">
      <h2>Danh sách sản phẩm</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Ảnh</th>
            <th>Người đăng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price} ₫</td>
              <td>{p.quantity}</td>
              <td>
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="product-image"
                />
              </td>
              <td>{p.owner?.username || 'Không rõ'}</td>
              <td>
                <button className="btn edit" onClick={() => onEdit(p)}>Sửa</button>
                <button className="btn delete" onClick={() => onDelete(p.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
