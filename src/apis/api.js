import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(baseURL+endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async (endpoint, data, headers) => {
  try {
    const response = await axios.post(baseURL+endpoint, data, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    return await axios.delete(baseURL+endpoint);
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export const updateData = async (endpoint,data) => {
  try {
    return await axios.put(baseURL+endpoint,data);
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};
