import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import EpisodeCard from './EpisodeCard';

type EpisodeProps = {
  characters: string[];
  isError: boolean;
  isFetching: boolean;
  isSuccess: boolean;
};

const EpisodeList: React.FC<EpisodeProps> = ({
  characters,
  isError,
  isFetching,
  isSuccess,
}) => {
  return (
    <>
      {isError && (
        <Flex flexDirection="column" alignItems="center" rowGap="2">
          <Text>There is no data at the moment, please try again later! </Text>
        </Flex>
      )}
      {!isFetching && (
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
            characters &&
            characters.map((el) => {
              return (
                <GridItem key={el}>
                  <EpisodeCard url={el} />
                </GridItem>
              );
            })}
        </Grid>
      )}
    </>
  );
};

export default EpisodeList;
