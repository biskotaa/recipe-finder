import axios from '../axios';

const PATH = '/api/character';

export const getCharacters = async ({ page }: { page: number }) => {
  const response = await axios.get(`${PATH}?page=${page}`);

  return response.data;
};

export const getCharacter = async (id: number) => {
  const response = await axios.get(`${PATH}/${id}`);

  return response.data;
};

export const filterCharacters = async ({
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
  const response = await axios.get(PATH, {
    params: {
      page: page,
      name: searchTerm,
      status: aliveStatus,
      gender: genderStatus,
      species: speciesStatus,
    },
  });

  return response.data;
};
