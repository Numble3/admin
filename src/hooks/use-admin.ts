import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendRequest } from 'src/api';

export const useAdmin = () => {
  const login = async (email: string, password: string) => {
    const { data, error } = await sendRequest<Token>({
      method: 'POST',
      path: '/api/sign-in',
      data: { email, password },
    });

    if (data) {
      localStorage.setItem(
        'admin',
        JSON.stringify({ accessToken: data.accessToken, refreshToken: data.refreshToken })
      );
    }

    return { data, error };
  };

  const logout = async () => {
    const { error } = await sendRequest({ method: 'GET', path: '/api/logout' });

    return error;
  };

  return { login, logout };
};

export const useCheckToken = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('admin');

  useEffect(() => {
    //토큰 있는지 확인
    if (location.pathname !== '/login' && !token) {
      navigate('/login');
    }
    if (location.pathname === '/login' && token) {
      navigate('/');
    }
  }, [location]);

  return { navigate };
};
