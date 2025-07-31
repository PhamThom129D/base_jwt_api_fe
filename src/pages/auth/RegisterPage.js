import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';

import AuthContainer from '../../components/auth/AuthContainer';
import InputField from '../../components/auth/InputField';
import MessageBox from '../../components/auth/MessageBox';
import SubmitButton from '../../components/auth/SubmitButton';
import useForm from '../../hook/useForm';

function RegisterPage() {
  const navigate = useNavigate();
  const [form, handleChange] = useForm({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await register(form);
      const token = res.data.token;
      if (!token) {
        setError('Không có token trả về từ server!');
        return;
      }

      localStorage.setItem('token', token);
      setSuccess('🎉 Đăng ký thành công! Đang chuyển hướng...');
      setTimeout(() => navigate('/home-user'), 1500);
    } catch (err) {
      setError('❌ Đăng ký thất bại! Kiểm tra lại thông tin.');
    }
  };

  return (
    <AuthContainer title="Đăng ký">
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <InputField
          label="Tên đăng nhập"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <InputField
          label="Mật khẩu"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <MessageBox message={error} type="error" />
        <MessageBox message={success} type="success" />

        <SubmitButton text="Đăng ký" />

        <div style={{ textAlign: 'center' }}>
          <p style={{ marginTop: '10px' }}>
            Đã có tài khoản?{' '}
            <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>
              Đăng nhập
            </a>
          </p>
        </div>
      </form>
    </AuthContainer>
  );
}

export default RegisterPage;
