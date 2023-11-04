import { useStore } from '../../store/store';
import { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../index';
import { filterRecipes } from '../../api/recipeAPI';
import randomArray from '../../utils/randomArray';
import { IRecipeResponse } from '../../interfaces/IRecipe';
import {
  Grid,
  GridItem,
  useToast,
  Flex,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Card from '../../components/ui/Card';
import CardSkeleton from '../ui/CardSkeleton';

const FilteredList = () => {
  const searchTerm = useStore((state) => state.searchTerm);
  const {
    data: filteredData,
    isError,
    isFetching,
    isSuccess,
  } = useQuery<IRecipeResponse[]>(
    [
      'filtered',
      { searchTerm },
    ],
    () =>
      filterRecipes({
        searchTerm,
      }),
    {
      keepPreviousData: true,
    }
  );
  const toast = useToast();
  const limit = 20;

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

    return () =>
      queryClient.removeQueries();
  }, [isError, searchTerm]);

  return (
    <Grid minH="600px">
      {isError && (
        <Flex flexDirection="column" alignItems="center" rowGap="2">
          <Text>There is no data with these tags: </Text>
          <UnorderedList>
            {searchTerm && <ListItem>{searchTerm}</ListItem>}
          </UnorderedList>
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
              filteredData &&
              filteredData.map((el) => {
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

export default FilteredList;
