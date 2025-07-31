import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';


export default function useRedirectByRole() {
  const { roles } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (roles.includes('ROLE_ADMIN')) {
      navigate('/home-admin');
    } else if (roles.includes('ROLE_USER')) {
      navigate('/home-user');
    } else {
      navigate('/unauthorized');
    }
  }, [roles, navigate]);
}
