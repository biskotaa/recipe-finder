import { useQuery } from '@tanstack/react-query';
import { getCharacter } from '../api/charactersAPI';
import { ICharacter } from '../interfaces/ICharacter';
import { Flex, useColorMode } from '@chakra-ui/react';
import Card from './ui/Card';
import Loader from './ui/Loader';

type CharacterCardProps = {
  url: string;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ url }) => {
  const id = url.split('/');
  const { data, isFetching, isSuccess } = useQuery<ICharacter>(
    ['episodeCard', Number(id[id.length - 1])],
    () => getCharacter(Number(id[id.length - 1]))
  );
  const { colorMode } = useColorMode();
  return (
    <>
      {isFetching && !data && (
        <Flex
          bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
          alignItems="center"
          justifyContent="center"
          borderRadius="6"
          minW="320"
          maxW="620"
          minH="250"
        >
          <Loader />
        </Flex>
      )}
      {isSuccess && data && (
        <Flex
          bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
          alignItems={['center', 'center', 'center', 'center', 'flex-start']}
          justifyContent={['center', 'center', 'center', 'flex-start']}
          flexDirection={['column', 'column', 'column', 'column', 'row']}
          borderRadius="6"
          minW="320"
          maxW="620"
          minH="250"
        >
          <Card
            id={data.id}
            image={data.image}
            location={data.location}
            name={data.name}
            origin={data.origin}
            species={data.species}
            status={data.status}
            gender={data.gender}
            url={data.url}
          />
        </Flex>
      )}
    </>
  );
};

export default CharacterCard;
