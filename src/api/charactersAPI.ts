import axios from '../axios';

const PATH = '/api/character';

export const getCharacters = async ({
  page,
  searchTerm,
  aliveStatus,
  genderStatus,
  speciesStatus,
}: {
  page: number;
  searchTerm: string | undefined;
  aliveStatus: string | undefined;
  genderStatus: string | undefined;
  speciesStatus: string | undefined;
}) => {
  const response = await axios.get(`${PATH}?page=${page}`, {
    params: {
      name: searchTerm,
      status: aliveStatus,
      gender: genderStatus,
      species: speciesStatus,
    },
  });

  return response.data;
};

export const getCharacter = async (id: number) => {
  const response = await axios.get(`${PATH}/${id}`);

  return response.data;
};
