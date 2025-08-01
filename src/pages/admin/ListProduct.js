import React, { useEffect, useState } from 'react';
import {
  getListProducts,
  deleteProduct,
  addProduct,
  updateProduct
} from '../../services/productService';

import ProductTable from '../../components/admin/manageProduct/ProductTable';
import ProductForm from '../../components/admin/manageProduct/ProductForm';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Typography
} from '@mui/material';

function ListProductPage() {
  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const loadProducts = () => {
    getListProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Lỗi load sản phẩm:', err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = (product) => {
    setProductToDelete(product);
    setOpenConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteProduct(productToDelete.id);
      setOpenConfirm(false);
      setProductToDelete(null);
      loadProducts();
    } catch (err) {
      console.error('Lỗi xóa sản phẩm:', err);
    }
  };

  const cancelDelete = () => {
    setOpenConfirm(false);
    setProductToDelete(null);
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

  const handleSubmitForm = async (formData) => {
    try {
      if (editData) {
        await updateProduct(editData.id, formData);
      } else {
        await addProduct(formData);
      }
      handleCloseForm();
      loadProducts();
    } catch (err) {
      console.error("Lỗi submit form:", err);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <ProductTable
        data={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />

      {/* Form Thêm/Sửa */}
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

      {/* Dialog xác nhận xóa */}
      <Dialog open={openConfirm} onClose={cancelDelete}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc chắn muốn xóa sản phẩm{' '}
            <strong>{productToDelete?.name}</strong> không?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="primary">
            Hủy
          </Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListProductPage;
