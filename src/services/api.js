const API_URL = import.meta.env.VITE_API_URL;
import axios from 'axios';

export const subscribe = async (email) => {
  try{
    const response = await axios.post(`https://auraring-be.onrender.com/api/subscribe`, {
      email
    });
    return {
      ok: true,
      data: response.data
    };
  } catch (error) {
    return {
      ok: false,
      data: error.response?.data || { message: "An error occurred while subscribing." }
    };
  }
};

export const getAllUsers = async () => {
  try{
    const response = await axios.get(`https://auraring-be.onrender.com/api/`);
    return {
      ok: true,
      data: response.data
    };
  } catch (error) {
    return {
      ok: false,
      data: error.response?.data || { message: "An error occurred while fetching users." }
    };
  }
};