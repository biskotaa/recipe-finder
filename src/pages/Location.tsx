import { useParams, Navigate } from 'react-router-dom';
import { Text, Grid, Flex, GridItem, useColorMode } from '@chakra-ui/react';
import CharacterCard from '../components/CharacterCard';
import { useQuery } from '@tanstack/react-query';
import { getLocation } from '../api/locationsAPI';
import { ILocation } from '../interfaces/ILocations';
import Loader from '../components/ui/Loader';

const Location = () => {
  const { id } = useParams();
  const { data, isError, isSuccess, isFetching } = useQuery<ILocation>(
    ['location', id],
    () => getLocation(Number(id))
  );
  const { colorMode } = useColorMode();
  if ((isSuccess && data.id !== Number(id)) || isError) {
    return <Navigate to="Notfound" />;
  }
  return (
    <Flex flexDir="column" my="6" rowGap="2" alignItems="center">
      {isFetching && <Loader />}
      {data && (
        <>
          <Flex
            flexDir="column"
            rowGap="2"
            textAlign="center"
            alignItems="center"
          >
            <Text
              color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
              fontSize="4xl"
              fontWeight="semibold"
            >
              {data.name} Residents
            </Text>
            <Text fontSize="xl">{data.dimension}</Text>
            <Text fontSize="xl">{data.type}</Text>
          </Flex>
          <Grid
            my={['4', '4', '6']}
            templateColumns={[
              '"repeat(1,1fr)"',
              'repeat(1,1fr)',
              'repeat(2,1fr)',
            ]}
            gap="6"
          >
            {data.residents.map((el) => {
              return (
                <GridItem key={el}>
                  <CharacterCard url={el} />
                </GridItem>
              );
            })}
          </Grid>
        </>
      )}
    </Flex>
  );
};

export default Location;
