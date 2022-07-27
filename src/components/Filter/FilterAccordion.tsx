import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import AliveStatus from './AliveStatus';
import GenderStatus from './GenderStatus';
import SpeciesStatus from './SpeciesStatus';

interface IFilteredProps {
  colorMode: string;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterAccordion: React.FC<IFilteredProps> = ({
  colorMode,
  setIsFiltered,
}) => {
  return (
    <Accordion bg={colorMode === 'dark' ? 'gray.800' : 'white'} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Status
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb="4">
          <AliveStatus setIsFiltered={setIsFiltered} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Gender
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb="4">
          <GenderStatus setIsFiltered={setIsFiltered} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Species
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb="4">
          <SpeciesStatus setIsFiltered={setIsFiltered} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterAccordion;
