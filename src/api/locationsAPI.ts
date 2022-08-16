import axios from '../axios';

const PATH = '/api/location';

export const getLocations = async ({ page }: { page: number }) => {
  const response = await axios.get(`${PATH}?page=${page}`);

  return response.data;
};

export const getLocation = async (id: number) => {
  const response = await axios.get(`${PATH}/${id}`);

  return response.data;
};
