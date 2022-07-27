import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import CharactersList from '../components/CharactersList';
import FilteredList from '../components/Filter/FilteredList';
import Banner from '../components/Banner';

const Home = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <>
      <Banner setIsFiltered={setIsFiltered} />
      <Container
        py="4"
        px={['4', '4', '4', '6', '8']}
        maxW={['480', '768', '1024', '1280', '1536']}
      >
        {!isFiltered && <CharactersList />}
        {isFiltered && <FilteredList />}
      </Container>
    </>
  );
};

export default Home;
