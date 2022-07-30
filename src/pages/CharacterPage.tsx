import { useParams, Navigate } from 'react-router-dom';
import { Text, Image, Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getCharacter } from '../api/charactersAPI';
import { ICharacter } from '../interfaces/ICharacter';
import { FaSkull, FaUser, FaQuestion } from 'react-icons/fa';
import Loader from '../components/ui/Loader';

const CharacterPage = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useQuery<ICharacter>(
    ['char', id],
    () => getCharacter(Number(id)),
    {
      staleTime: 12000,
      retry: 0,
    }
  );

  if ((isSuccess && data.id !== Number(id)) || isError) {
    return <Navigate to="Notfound" />;
  }

  return (
    <Flex flexDir="column" my="6" rowGap="2" alignItems="center">
      {isLoading && <Loader />}
      {data && (
        <>
          <Image h="200" objectFit="contain" src={data.image} />
          <Text fontSize="3xl" fontWeight="600">
            {data.name}
          </Text>
          <Flex
            alignItems="center"
            justifyContent="center"
            w="100%"
            fontSize={['md', 'md', 'md', 'lg']}
            columnGap="2"
          >
            {data.status === 'Dead' && <FaSkull style={{ color: '#E53E3E' }} />}
            {data.status === 'Alive' && <FaUser style={{ color: '#48BB78' }} />}
            {data.status === 'unknown' && <FaQuestion />}
            <Text>{data.status}</Text>
            <Text>-</Text>
            <Text fontSize="md" fontWeight="600">
              {data.species}
            </Text>
          </Flex>
          <Flex columnGap="2">
            <Text>Gender</Text>
            <Text>-</Text>
            <Text fontWeight="600">{data.gender}</Text>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default CharacterPage;
