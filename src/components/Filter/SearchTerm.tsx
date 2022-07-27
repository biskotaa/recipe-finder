import { useStore } from '../../store/store';
import {
  InputGroup,
  Input,
  InputRightElement,
  useColorMode,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchTerm = ({
  setIsFiltered,
}: {
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { colorMode } = useColorMode();
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);

  if (!!searchTerm) {
    setIsFiltered(true);
  }

  return (
    <InputGroup w="100%">
      <Input
        size="lg"
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        pl="4"
        borderTopRadius="6"
        borderBottomRadius="0"
        placeholder="Search a character by name!"
        value={searchTerm ? searchTerm : ''}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <InputRightElement
        cursor="pointer"
        pr="4"
        fontSize="xl"
        color="teal.500"
        h="100%"
        children={<FaSearch />}
      />
    </InputGroup>
  );
};

export default SearchTerm;
