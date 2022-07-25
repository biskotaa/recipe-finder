import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { BiRocket, BiCameraMovie } from 'react-icons/bi';
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
          <MenuList>
            <Link to="locations">
              <MenuItem
                fontSize="lg"
                color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
                icon={<BiRocket style={{ fontSize: '20px' }} />}
              >
                Locations
              </MenuItem>
            </Link>
            <Link to="episodes">
              <MenuItem
                fontSize="lg"
                color={colorMode === 'dark' ? 'teal.300' : 'teal.500'}
                icon={<BiCameraMovie style={{ fontSize: '20px' }} />}
              >
                Episodes
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
      <Flex alignItems="center">
        <Flex
          display={['none', 'none', 'flex']}
          mx="1rem"
          gap="1rem"
          fontWeight="600"
        >
          <Link to="locations">
            <span className="links">Locations</span>
          </Link>
          <Link to="episodes">
            <span className="links">Episodes</span>
          </Link>
        </Flex>
        <ColorModeSwitcher variant="solid" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
