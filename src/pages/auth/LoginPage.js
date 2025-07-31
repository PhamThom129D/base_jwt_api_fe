import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

import AuthContainer from '../../components/auth/AuthContainer';
import InputField from '../../components/auth/InputField';
import MessageBox from '../../components/auth/MessageBox';
import useForm from '../../hook/useForm';
import SubmitButton from '../../components/auth/SubmitButton';

function LoginPage() {
  const navigate = useNavigate();
  const [form, handleChange] = useForm({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await login(form);
      const { token } = res.data;
      if (!token) {
        setError('Không có token trả về từ server!');
        return;
      }

      // Lưu token vào localStorage hoặc sessionStorage tùy theo checkbox
      if (rememberMe) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      navigate('/redirect-with-role');
    } catch (err) {
      setError('Sai tên đăng nhập hoặc mật khẩu!');
    }
  };

  return (
    <AuthContainer title="Đăng nhập">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <InputField
          label="Tên đăng nhập"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <div style={{ position: 'relative' }}>
          <InputField
            label="Mật khẩu"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '5px',
              top: '52px',
              cursor: 'pointer',
              fontSize: '21px',
              color: '#555'
            }}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Ghi nhớ đăng nhập</label>
        </div>

        <MessageBox message={error} type="error" />

        <SubmitButton text="Đăng nhập" />

        <div style={{ textAlign: 'center' }}>
          <p style={{ marginTop: '10px' }}>
            Chưa có tài khoản? <a href="/register">Đăng ký</a>
          </p>
        </div>
      </form>
    </AuthContainer>
  );
}

export default LoginPage;
