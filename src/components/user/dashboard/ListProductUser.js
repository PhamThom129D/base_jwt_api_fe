import React, { useEffect, useState } from 'react';
import { getListProducts } from '../../../services/productService';
import ProductCard from './ProductCart';
function ListProductUser() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListProducts();
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sản phẩm</h2>
      <div style={styles.grid}>
        {products.map((product) => (
         <ProductCard
  key={product.id}
  product={product}
  onAddToCart={(product) => console.log('Thêm vào giỏ:', product)}
  onViewDetail={(product) => console.log('Xem chi tiết:', product)}
/>

        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
};

export default ListProductUser;