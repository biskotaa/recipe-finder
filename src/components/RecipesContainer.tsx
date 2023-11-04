import { useStore } from '../store/store';
import RecipeList from './RecipeList';
import FilteredList from './Filter/FilteredList';
import { Container } from '@chakra-ui/react';

const RecipesContainer = () => {
  const isFiltered = useStore((state) => state.isFiltered);

  return (
    <Container
      py="4"
      px={['4', '4', '4', '6', '8']}
      maxW={['480', '768', '1024', '1280', '1536']}
    >
      {!isFiltered && <RecipeList />}
      {isFiltered && <FilteredList />}
    </Container>
  );
};

export default RecipesContainer;
