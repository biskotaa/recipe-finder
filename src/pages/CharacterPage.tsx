import { useParams, Navigate } from 'react-router-dom';
import { Text, Image } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getCharacter } from '../api/charactersAPI';
import { ICharacter } from '../interfaces/ICharacter';

const CharacterPage = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useQuery<ICharacter>(
    ['char', id],
    () => getCharacter(Number(id)),
    {
      staleTime: 12000,
    }
  );

  console.log(data, 'single char');

  if (isSuccess && data.id !== Number(id)) {
    return <Navigate to="Notfound" />;
  }

  return (
    <>
      <Text>{data?.name}</Text>
      <Image src={data?.image} />
    </>
  );
};

export default CharacterPage;
