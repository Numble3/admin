import { sendRequest } from 'src/apis';

export const useAdmin = () => {
  const login = async (email: string, password: string) => {
    const { data, error } = await sendRequest<{ accessToken: string; refreshToken: string }>({
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

  return { login };
};
