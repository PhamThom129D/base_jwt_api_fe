// ListProductPage.js
import React, { useEffect, useState } from 'react';
import { getListProducts, deleteProduct } from '../../services/productService';
import ProductTable from '../../components/admin/manageProduct/ProductTable';
import ProductForm from '../../components/admin/manageProduct/ProductForm';
import {
  Dialog, DialogContent, DialogTitle, DialogActions, Button
} from '@mui/material';

function ListProductPage() {
  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null); // dữ liệu đang sửa

  const loadProducts = () => {
    getListProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Lỗi load sản phẩm:', err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      try {
        await deleteProduct(id);
        loadProducts();
      } catch (err) {
        console.error('Lỗi xóa sản phẩm:', err);
      }
    }
  };

  const handleEdit = (product) => {
    setEditData(product);
    setOpenForm(true);
  };

  const handleAdd = () => {
    setEditData(null);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setEditData(null);
  };

  const handleSubmitForm = (formData) => {
    // console.log("Submit form:", formData)
    // TODO: gọi API tạo/cập nhật
    // Nếu có editData => gọi update, không thì gọi create
    handleCloseForm();
    loadProducts();
  };

  return (
    <div style={{ padding: 24 }}>
      <ProductTable
        data={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />

      <Dialog open={openForm} onClose={handleCloseForm} maxWidth="sm" fullWidth>
        <DialogTitle>{editData ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}</DialogTitle>
        <DialogContent dividers>
          <ProductForm onSubmit={handleSubmitForm} initialData={editData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="secondary">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListProductPage;
