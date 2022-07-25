import { Container } from '@chakra-ui/react';
import CharactersList from '../components/CharactersList';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <Container
        py="4"
        px={['4', '4', '4', '6', '8']}
        maxW={['480', '768', '1024', '1280', '1536']}
      >
        <CharactersList />
      </Container>
    </>
  );
};

export default Home;
