import React, { useState, useEffect } from 'react';
import InputField from '../../../components/auth/InputField';
import SubmitButton from '../../../components/auth/SubmitButton';
import MessageBox from '../../../components/auth/MessageBox';


function ProductForm({ product, onSave }) {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    quantity: '',
    imageUrl: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (product) setForm(product);
    else setForm({
      name: '',
      price: '',
      description: '',
      quantity: '',
      imageUrl: ''
    });
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.quantity) {
      setMessage('Vui lòng điền đầy đủ thông tin');
      return;
    }
    setMessage('');
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>{form.id ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}</h2>
      <InputField label="Tên" name="name" value={form.name} onChange={handleChange} />
      <InputField label="Giá" name="price" type="number" value={form.price} onChange={handleChange} />
      <InputField label="Mô tả" name="description" value={form.description} onChange={handleChange} />
      <InputField label="Số lượng" name="quantity" type="number" value={form.quantity} onChange={handleChange} />
      <InputField label="Link ảnh" name="imageUrl" value={form.imageUrl} onChange={handleChange} />

      <MessageBox message={message} type="error" />
      <SubmitButton text={form.id ? 'Cập nhật' : 'Thêm'} />
    </form>
  );
}

export default ProductForm;
