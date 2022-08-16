import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Flex } from '@chakra-ui/react';

//Components
import Layout from './components/Layout/Layout';
import Loader from './components/ui/Loader';

//Pages
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const CharacterPage = lazy(() => import('./pages/CharacterPage'));
const Episodes = lazy(() => import('./pages/Episodes'));
const Episode = lazy(() => import('./pages/Episode'));
const Locations = lazy(() => import('./pages/Locations'));
const Location = lazy(() => import('./pages/Location'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Flex pt="6rem" justifyContent="center" h="100vh" w="100vw">
            <Loader />
          </Flex>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="locations" element={<Locations />} />
            <Route path="locations/:id" element={<Location />} />
            <Route path="episodes" element={<Episodes />} />
            <Route path="episodes/:id" element={<Episode />} />
            <Route path="characters/:id" element={<CharacterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
