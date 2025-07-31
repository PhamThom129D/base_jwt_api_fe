import React, { useEffect, useState } from 'react';
import ProductSearch from '../../components/admin/manageProduct/ProductSearch';
import ProductForm from '../../components/admin/manageProduct/ProductForm';
import ProductTable from '../../components/admin/manageProduct/ProducTable';
import {
  getListProducts,
  searchProductByName,
  addProduct,
  updateProduct,
  deleteProduct
} from '../../services/productService';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchProducts = async () => {
    const res = await getListProducts();
    setProducts(res.data);
  };

  const handleSearch = async (keyword) => {
    setSearchKeyword(keyword);
    if (keyword) {
      const res = await searchProductByName({ name: keyword });
      setProducts(res.data);
    } else {
      fetchProducts();
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const handleSave = async (product) => {
    if (product.id) {
      await updateProduct(product.id, {
        name: product.name,
        price: product.price,
        description: product.description,
        quantity: product.quantity,
        imageUrl: product.imageUrl,
      });
    } else {
      await addProduct(product);
    }
    setEditingProduct(null);
    setShowModal(false);
    fetchProducts();
  };

  const handleAdd = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý sản phẩm</h2>
      <ProductSearch onSearch={handleSearch} />

      <div style={{ margin: '20px 0' }}>
        <button
          onClick={handleAdd}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          + Thêm sản phẩm
        </button>
      </div>

      <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />

      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.content}>
            <h3>{editingProduct ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}</h3>
            <ProductForm product={editingProduct} onSave={handleSave} />
            <div style={{ textAlign: 'right', marginTop: 20 }}>
              <button onClick={() => setShowModal(false)}>Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    minWidth: '400px',
    maxWidth: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
  }
};

export default ProductPage;
