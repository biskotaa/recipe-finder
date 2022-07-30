import { Flex, useColorMode, Image } from '@chakra-ui/react';
// import { BiPlanet } from 'react-icons/bi';

const NavLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      columnGap="4"
      color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
      fontSize="4xl"
    >
      <Image objectFit="contain" h="10" src="https://i.imgur.com/7CkUDLL.png" />
      {/* <BiPlanet /> */}
    </Flex>
  );
};

export default NavLogo;
