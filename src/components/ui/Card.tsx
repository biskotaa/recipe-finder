import {
  Flex,
  Text,
  useColorMode,
  Heading,
  OrderedList,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IRecipe } from '../../interfaces/IRecipe';

const Card: React.FC<IRecipe> = ({
  id,
  name,
  ingredients,
  instructions
}) => {
  const { colorMode } = useColorMode();
  return (
    <Link to={`/recipes/${id}`}>
    <Flex
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
      alignItems="flex-start"
      justifyContent={['center', 'center', 'center', 'flex-start']}
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      borderRadius="6"
    >
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
          <Heading
            fontSize={['2xl', '2xl', '2xl', '3xl']}
            fontWeight="600"
            w="100%"
            as='h2'
            color={colorMode === 'dark' ? 'orange.300' : 'orange.300'}
          >
            {name}
          </Heading>
          <Flex>
            <Text
              fontSize={['2xl', '2xl', '2xl', '3xl']}
              fontWeight="600"
              w="30%"
              textAlign={'left'}
              color={colorMode === 'dark' ? 'white' : 'grey.700'}
            >
              Ingredients:
            </Text>
            <Flex flexDirection={'column'} justifyContent={'flex-start'}>
              {ingredients.map(ingridient => (
                <Text
                fontSize={['2xl', '2xl', '2xl', '3xl']}
                fontWeight="600"
                w="100%"
                textAlign={'left'}
                ml="4"
                key={ingridient}
                color={colorMode === 'dark' ? 'orange.300' : 'grey.700'}
              >
                {ingridient}
              </Text>
              ))}
            </Flex>
          </Flex>
          <Flex>
            <Text
              fontSize={['2xl', '2xl', '2xl', '3xl']}
              fontWeight="600"
              w="30%"
              textAlign={'left'}
              color={colorMode === 'dark' ? 'white' : 'grey.700'}
            >
              Instructions:
            </Text>
            <Text
              fontSize={['2xl', '2xl', '2xl', '3xl']}
              fontWeight="600"
              w="100%"
              textAlign={'left'}
              ml="4"
              key={instructions}
              color={colorMode === 'dark' ? 'orange.300' : 'grey.700'}
            >
              {instructions}
            </Text>
          </Flex>
        </Flex>
        
      </Flex>
    </Flex>
    </Link>

  );
};

export default Card;
