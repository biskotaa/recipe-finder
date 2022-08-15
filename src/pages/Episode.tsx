import { useParams, Navigate } from 'react-router-dom';
import { Text, Grid, Flex, GridItem, useColorMode } from '@chakra-ui/react';
import EpisodeCard from '../components/EpisodeCard';
import { useQuery } from '@tanstack/react-query';
import { getEpisode } from '../api/episodeAPI';
import { IEpisode } from '../interfaces/IEpisode';
import Loader from '../components/ui/Loader';

const Episode = () => {
  const { id } = useParams();
  const { data, isError, isSuccess, isFetching } = useQuery<IEpisode>(
    ['episode', id],
    () => getEpisode(Number(id))
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
              {data.name}
            </Text>
            <Text fontSize="xl">{data.episode}</Text>
            <Text fontSize="xl">{data.air_date}</Text>
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
            {data.characters.map((el) => {
              return (
                <GridItem key={el}>
                  <EpisodeCard url={el} />
                </GridItem>
              );
            })}
          </Grid>
        </>
      )}
    </Flex>
  );
};

export default Episode;
