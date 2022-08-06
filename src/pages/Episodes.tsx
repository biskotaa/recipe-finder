import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getEpisodes, getEpisode } from '../api/episodeAPI';
import { IEpisodeAPI, IEpisode } from '../interfaces/IEpisode';
import Loader from '../components/ui/Loader';
import EpisodeList from '../components/EpisodeList';
import {
  Flex,
  Container,
  Box,
  Accordion,
  RadioGroup,
  Stack,
  Radio,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
  useToast,
  useColorMode,
} from '@chakra-ui/react';

const Episodes = () => {
  const [episodeId, setEpisodeId] = useState('1');
  const { colorMode } = useColorMode();
  const {
    data: episodes,
    isError: episodesError,
    isSuccess: episodesSuccess,
    isFetching: episodesFetching,
  } = useQuery<IEpisodeAPI>(
    ['episodes', { page: 1 }],
    () => getEpisodes({ page: 1 }),
    {
      keepPreviousData: true,
      staleTime: 120000,
    }
  );
  const {
    data: episode,
    isError,
    isSuccess,
    isFetching,
  } = useQuery<IEpisode>(['episode', episodeId], () => getEpisode(episodeId));
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
    if (episodesError) {
      toast({
        status: 'error',
        duration: 4000,
        title: 'No Episodes!',
        description: 'Something went wrong!',
        isClosable: true,
      });
    }
  }, [isError, episodesError, episodeId]);

  return (
    <Container
      py="4"
      px={['4', '4', '4', '6', '8']}
      maxW={['480', '768', '1024', '1280', '1536']}
    >
      {isSuccess && episode && (
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          my="4"
        >
          <Text fontSize="4xl" fontWeight="semibold" lineHeight="taller">
            {episode.name}
          </Text>
          <Text fontSize="2xl" lineHeight="tall">
            {episode.air_date}
          </Text>
        </Flex>
      )}
      <Flex
        flexDirection={['column', 'column', 'column', 'row']}
        columnGap="3"
        alignItems="start"
        justifyContent="space-between"
      >
        <Flex
          flex="1"
          mt="6"
          alignItems="center"
          px="3"
          justifyContent="center"
        >
          <Accordion
            bg={colorMode === 'dark' ? 'gray.800' : 'white'}
            allowMultiple
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Please Select an episode!
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <RadioGroup onChange={setEpisodeId} value={Number(episodeId)}>
                  <Stack direction="column">
                    {episodesSuccess &&
                      episodes &&
                      episodes.results.map((el) => {
                        return (
                          <Radio value={el.id} key={el.id}>
                            {el.name}
                          </Radio>
                        );
                      })}
                  </Stack>
                </RadioGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex
          minH="600"
          minW={['full', 'full', 'full', '500']}
          justifyContent="center"
          alignItems="center"
          flex={['1', '1', '1', '3']}
        >
          {isFetching && <Loader />}
          {isSuccess && episode && episodes && (
            <EpisodeList
              characters={episode?.characters}
              isError={episodesError}
              isFetching={episodesFetching}
              isSuccess={episodesSuccess}
            />
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Episodes;
