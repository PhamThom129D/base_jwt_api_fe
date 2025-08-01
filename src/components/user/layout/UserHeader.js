import React from 'react';
import ProductSearch from '../../admin/manageProduct/ProductSearch';


function HeaderUser({ onSearch }) {
  return (
    <header style={styles.header}>
      <div style={styles.topRow}>
        <h1 style={styles.logo}>🛒 MyShop</h1>
        <nav style={styles.nav}>
          <a href="/">Trang chủ</a>
          <a href="/cart">Giỏ hàng</a>
          <a href="/profile">Tài khoản</a>
        </nav>
      </div>
      <div style={styles.searchRow}>
        <ProductSearch onSearch={onSearch} />
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '16px 32px',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  searchRow: {
    marginTop: '12px',
  },
  logo: { margin: 0 },
};

export default HeaderUser;
