import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getLocations } from '../api/locationsAPI';
import { ILocationAPI } from '../interfaces/ILocations';
import Loader from '../components/ui/Loader';
import {
  Flex,
  Container,
  Grid,
  GridItem,
  Button,
  Text,
  useToast,
  useColorMode,
} from '@chakra-ui/react';

const Locations = () => {
  const [page, setPage] = useState(1);
  const { colorMode } = useColorMode();
  const {
    data: locations,
    isError,
    isSuccess,
    isFetching,
    isPreviousData,
  } = useQuery<ILocationAPI>(
    ['locations', { page }],
    () => getLocations({ page }),
    {
      keepPreviousData: true,
      staleTime: 120000,
    }
  );
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        status: 'error',
        duration: 4000,
        title: 'No Episode!',
        description: 'Something went wrong!',
        isClosable: true,
      });
    }
  }, [isError]);

  return (
    <Container
      py="4"
      px={['4', '4', '4', '6', '8']}
      maxW={['480', '768', '1024', '1280', '1536']}
    >
      <Text
        fontSize="4xl"
        fontWeight="semibold"
        color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
        textAlign="center"
        my="6"
      >
        Rick and Morty All Locations
      </Text>
      {isFetching && <Loader />}
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
            locations &&
            locations.results.map((el) => {
              return (
                <Link to={`${el.id}`} key={el.id}>
                  <GridItem
                    bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
                    borderRadius="6"
                    p="3"
                  >
                    <Text
                      fontSize="2xl"
                      fontWeight="semibold"
                      color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
                      textAlign="center"
                    >
                      {el.name}
                    </Text>
                    <Text
                      fontSize="md"
                      fontWeight="semibold"
                      color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
                      textAlign="center"
                    >
                      {el.dimension}
                    </Text>
                    <Text textAlign="center">{el.type}</Text>
                  </GridItem>
                </Link>
              );
            })}
        </Grid>
        <Flex justifyContent="center" my="4" alignItems="center" columnGap="4">
          <Button
            colorScheme="teal"
            size="md"
            disabled={page === 1}
            onClick={() => setPage((t) => Math.max(t - 1, 0))}
          >
            Prev
          </Button>
          {locations && (
            <Text fontSize="xl" fontWeight="600">
              {page} / {locations.info.pages} Pages
            </Text>
          )}
          <Button
            colorScheme="teal"
            size="md"
            disabled={isPreviousData || !locations?.info.next}
            onClick={() => {
              if (!isPreviousData || locations?.info.next) {
                setPage((t) => t + 1);
              }
            }}
          >
            Next
          </Button>
        </Flex>
      </>
    </Container>
  );
};

export default Locations;
