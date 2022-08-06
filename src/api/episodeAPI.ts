import axios from '../axios';

const PATH = '/api/episode';

export const getEpisodes = async ({ page }: { page: number }) => {
  const response = await axios.get(`${PATH}?page=${page}`);

  return response.data;
};

export const getEpisode = async (id: string) => {
  const response = await axios.get(`${PATH}/${id}`);

  return response.data;
};
