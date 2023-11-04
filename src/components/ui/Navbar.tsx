import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  useColorMode,
  Menu,
  MenuButton,
  IconButton,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import NavLogo from './NavLogo';
const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      boxShadow="lg"
      w="100%"
      position="sticky"
      top="0px"
      alignItems="center"
      px={['4', '6']}
      py={['2', '2', '4']}
      zIndex="30"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
    >
      <Box>
        <Link to="/">
          <NavLogo />
        </Link>
      </Box>
      <Spacer />
      <Flex display={['flex', 'flex', 'none']}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FaBars />}
            variant="solid"
          />
        </Menu>
      </Flex>
      <Flex alignItems="center">
        <ColorModeSwitcher variant="solid"/>
      </Flex>
    </Flex>
  );
};

export default Navbar;
