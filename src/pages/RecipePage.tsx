import { useParams, Navigate } from 'react-router-dom';
import { Heading, Flex, Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getRecipe } from '../api/recipeAPI';
import { IRecipeResponse } from '../interfaces/IRecipe'
import Loader from '../components/ui/Loader';

const RecipePage = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useQuery<IRecipeResponse>(
    ['singleRecipe', id],
    () => getRecipe(id!),
    {
      staleTime: 12000,
      retry: 0,
    }
    );
  if ((isSuccess && data._id !== id) || isError) {
    return <Navigate to="Notfound" />;
  }

  return (
    <Flex flexDir="column" my="6" rowGap="2" alignItems="center">
      {isLoading && <Loader />}
      {data && (
        <>
          <Heading as="h2" fontWeight="600">
            {data.name}
          </Heading>
          <Box
          width={['100%', '100%', '50%', '20%']}
          my="5"
          >
            <UnorderedList mx="auto">
              {data.ingredients.map(el => (
                <ListItem key={el}>
                  {el}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Flex
            alignItems="center"
            justifyContent="center"
            w="100%"
            fontSize={['md', 'md', 'md', 'lg']}
            columnGap="2"
          >
            {data.instructions}
          </Flex>
          
        </>
      )}
    </Flex>
  );
};

export default RecipePage;
