import axios from 'axios';

const API_BASE_URL = 'http://3.111.196.92:8020/';

export const fetchData = async (endpoint) => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  if (!auth) return null;

  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      auth: {
        username: auth.username,
        password: auth.password
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};
