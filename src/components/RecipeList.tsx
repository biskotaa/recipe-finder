import { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRecipe, getRecipes } from '../api/recipeAPI';
import randomArray from '../utils/randomArray';
import { IRecipeResponse } from '../interfaces/IRecipe';
import { Grid, GridItem, useToast, Flex, Text, Button } from '@chakra-ui/react';
import Card from './ui/Card';
import CardSkeleton from './ui/CardSkeleton';

const RecipeList = () => {
  const {
    data: recipes,
    isError,
    isFetching,
    isSuccess,
  } = useQuery<IRecipeResponse[]>(
    ['recipes'],
    () => getRecipes(),
    {
      keepPreviousData: true,
      staleTime: 120000,
    }
  );
  const toast = useToast();
  const limit = 5;
  const rndmArray = useMemo(() => randomArray(limit), [limit]);

  useEffect(() => {
    if (isError) {
      toast({
        status: 'error',
        duration: 4000,
        title: 'No data!',
        description: 'Something went wrong!',
        isClosable: true,
      });
    }
  }, [isError]);

  return (
    <Grid minH="600px">
      {isError && (
        <Flex flexDirection="column" alignItems="center" rowGap="2">
          <Text>There is no data at the moment, please try again later! </Text>
        </Flex>
      )}
      {!isFetching ? (
        <>
          <Grid
            my={['4', '4', '6']}
            templateColumns={[
              '"repeat(1,1fr)"',
              'repeat(1,1fr)',
              'repeat(2,1fr)',
            ]}
            gap="6"
          >
            {isSuccess &&
              recipes &&
              recipes.map((el) => {
                return (
                  <GridItem key={el._id}>
                    <Card
                      id={el._id}
                      name={el.name}
                      ingredients={el.ingredients}
                      instructions={el.instructions}
                    />
                  </GridItem>
                );
              })}
          </Grid>
        </>
      ) : (
        <Grid
          my={['4', '4', '6']}
          templateColumns={[
            '"repeat(1,1fr)"',
            'repeat(1,1fr)',
            'repeat(2,1fr)',
          ]}
          gap="6"
        >
          {isFetching &&
            rndmArray.map((el: number) => {
              return (
                <GridItem key={el}>
                  <CardSkeleton />
                </GridItem>
              );
            })}
        </Grid>
      )}
    </Grid>
  );
};

export default RecipeList;
