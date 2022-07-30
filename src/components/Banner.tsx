import { useStore } from '../store/store';
import FilterAccordion from './Filter/FilterAccordion';
import { Flex, Text, useColorMode, Button } from '@chakra-ui/react';
import SearchTerm from './Filter/SearchTerm';

const Banner = () => {
  const { colorMode } = useColorMode();
  const clearAllFilters = useStore((state) => state.clearAllFilters);

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
        <SearchTerm />
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
