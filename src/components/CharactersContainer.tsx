import { useStore } from '../store/store';
import CharactersList from './CharactersList';
import FilteredList from './Filter/FilteredList';
import { Container } from '@chakra-ui/react';

const CharactersContainer = () => {
  const isFiltered = useStore((state) => state.isFiltered);

  return (
    <Container
      py="4"
      px={['4', '4', '4', '6', '8']}
      maxW={['480', '768', '1024', '1280', '1536']}
    >
      {!isFiltered && <CharactersList />}
      {isFiltered && <FilteredList />}
    </Container>
  );
};

export default CharactersContainer;
