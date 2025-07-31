import { useMemo } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function useAuth() {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');

  const auth = useMemo(() => {
    if (!token) return { isLoggedIn: false };

    try {
      const decoded = jwtDecode(token);
      const { sub: username, roles = [] } = decoded;

      return {
        isLoggedIn: true,
        token,
        username,
        roles,
        isAdmin: roles.includes('ROLE_ADMIN'),
        isUser: roles.includes('ROLE_USER'),
      };
    } catch (error) {
      console.error('Invalid token:', error);
      return { isLoggedIn: false };
    }
  }, [token]);

  return auth;
}
