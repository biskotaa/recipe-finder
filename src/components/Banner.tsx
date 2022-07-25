import { useStore } from '../store/store';
import { useEffect } from 'react';
import FilterAccordion from './Filter/FilterAccordion';
import {
  Flex,
  Text,
  useColorMode,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
  const { colorMode } = useColorMode();
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const clearAllFilters = useStore((state) => state.clearAllFilters);

  useEffect(() => {
    clearAllFilters();
    console.log('rendered');
  }, [clearAllFilters]);

  return (
    <Flex
      backgroundImage="url('https://i.imgur.com/eudxAN5.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      w="100%"
      minH="550px"
      maxH="fit-content"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      pb="4"
    >
      <Text
        fontSize={['5xl', '6xl', '8xl']}
        fontWeight="extrabold"
        textAlign="center"
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        bgClip="text"
        style={{
          WebkitTextStroke: colorMode === 'light' ? '3px #1A202C' : '3px white',
        }}
      >
        Rick and Morty Adventures
      </Text>
      <Flex w={['70%', '70%', '70%', '50%']} flexDir="column">
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
            onClick={() => console.log('okej')}
            cursor="pointer"
            pr="4"
            fontSize="xl"
            color="teal.500"
            h="100%"
            children={<FaSearch />}
          />
        </InputGroup>
        <FilterAccordion colorMode={colorMode} />
        <Button
          colorScheme="teal"
          borderTopRadius="0"
          variant="solid"
          onClick={clearAllFilters}
        >
          Clear All Filters
        </Button>
      </Flex>
    </Flex>
  );
};

export default Banner;
