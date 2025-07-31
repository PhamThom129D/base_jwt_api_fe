import React, { useState } from 'react';

function ProductSearch({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(keyword.trim());
  };

  return (
    <form
      onSubmit={handleSearch}
      style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <input
        type="text"
        placeholder="🔍 Tìm kiếm sản phẩm..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          flex: '1',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          minWidth: '200px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Tìm
      </button>
    </form>
  );
}

export default ProductSearch;
