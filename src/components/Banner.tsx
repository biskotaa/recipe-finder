import { Flex, Text, useColorMode } from '@chakra-ui/react';
import SearchTerm from './Filter/SearchTerm';
import Image from '../assets/bannerBG.jpg';

const Banner = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      backgroundImage={ Image }
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
        fontSize={['6xl']}
        fontWeight="extrabold"
        textAlign="center"
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        bgClip="text"
        style={{
          WebkitTextStroke: colorMode === 'light' ? '3px #1A202C' : '3px white',
        }}
      >
        Recipe Search Engine
      </Text>
      <Flex w={['70%', '70%', '70%', '50%']} flexDir="column">
        <SearchTerm />
      </Flex>
    </Flex>
  );
};

export default Banner;
