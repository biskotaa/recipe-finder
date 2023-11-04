import axios from '../axios';

const PATH = '/api/recipes';

export const getRecipes = async () => {
  const response = await axios.get(`${PATH}`);

  return response.data;
};

export const getRecipe = async (id: string) => {
  const response = await axios.get(`${PATH}/${id}`);

  return response.data;
};

export const filterRecipes = async ({
  searchTerm,
}: {
  searchTerm: string | undefined;
}) => {
  const response = await axios.get(`${PATH}/filter`, {
    params: {
      searchTerm,
    },
  });

  return response.data;
};
