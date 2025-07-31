// src/components/user/ProductCard.js
import React from 'react';
import { IMAGE_BASE_URL } from '../../../constants/config';

function ProductCard({ product, onAddToCart, onViewDetail }) {
  const formatPrice = (price) =>
    price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  return (
    <div style={styles.card}>
      <img
             src={`${IMAGE_BASE_URL}${product.imageUrl}`}
        alt={product.name}
        style={styles.image}
      />
      <h3>{product.name}</h3>
      <p>{formatPrice(product.price)}</p>
      <div style={styles.buttonGroup}>
        <button onClick={() => onAddToCart(product)}>🛒 Thêm vào giỏ</button>
        <button onClick={() => onViewDetail(product)}>🔍 Xem chi tiết</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '16px',
    width: '220px',
    margin: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginTop: '10px',
  },
};

export default ProductCard;
