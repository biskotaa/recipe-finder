import {
  Flex,
  Image,
  Text,
  useColorMode,
  Divider,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaSkull, FaUser, FaQuestion } from 'react-icons/fa';
import { ICharacter } from '../../interfaces/ICharacter';

const Card: React.FC<ICharacter> = ({
  id,
  name,
  image,
  location,
  origin,
  species,
  status,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
      alignItems="flex-start"
      justifyContent={['center', 'center', 'center', 'flex-start']}
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      borderRadius="6"
    >
      <Link
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        to={`/characters/${id}`}
      >
        <Image
          src={image}
          alt={name}
          objectFit="cover"
          maxW={['200', '200', '200', '250']}
          minH="250"
          borderLeftRadius="6"
        />
      </Link>
      <Flex
        alignItems="center"
        flexDirection="column"
        w="100%"
        rowGap="2"
        px="4"
        pt="2"
        pb="4"
      >
        <Flex flexDirection="column" w="100%" textAlign="center">
          <Text
            fontSize={['2xl', '2xl', '2xl', '3xl']}
            fontWeight="600"
            w="100%"
            color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
          >
            {name}
          </Text>
          <Flex
            alignItems="center"
            justifyContent="center"
            w="100%"
            fontSize={['md', 'md', 'md', 'lg']}
            columnGap="2"
          >
            {status === 'Dead' && <FaSkull style={{ color: '#E53E3E' }} />}
            {status === 'Alive' && <FaUser style={{ color: '#48BB78' }} />}
            {status === 'unknown' && <FaQuestion />}
            <Text>{status}</Text>
            <Text>-</Text>
            <Text fontSize="md" fontWeight="600">
              {species}
            </Text>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          w="100%"
          justifyContent="space-evenly"
          columnGap="2"
        >
          <Flex flexDir="column" w="95%" textAlign="right" rowGap="2">
            <Text
              color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
              fontWeight="600"
            >
              Origin:
            </Text>
            <Text>{origin.name}</Text>
          </Flex>
          <Center h="100px" mx="2" bg="teal.300">
            <Divider orientation="vertical" />
          </Center>
          <Flex flexDir="column" w="95%" textAlign="left" rowGap="2">
            <Text
              color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
              fontWeight="600"
            >
              Last known location:
            </Text>
            <Text>{location.name}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
