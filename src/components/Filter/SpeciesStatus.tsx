import { useStore } from '../../store/store';
import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

const SpeciesStatus = () => {
  const setSpecies = useStore((state) => state.setSpecies);
  const species = useStore((state) => state.speciesStatus);

  return (
    <>
      <RadioGroup onChange={setSpecies} value={species ? species : 1}>
        <Stack direction={['column', 'column', 'column', 'column', 'row']}>
          <Radio value="Human">Human</Radio>
          <Radio value="Humanoid">Humanoid</Radio>
          <Radio value="Mythological Creature">Mythological</Radio>
          <Radio value="Alien">Alien</Radio>
          <Radio value="Animal">Animal</Radio>
          <Radio value="Robot">Robot</Radio>
          <Radio value="Disease">Disease</Radio>
          <Radio value="unknown">Unknown</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default SpeciesStatus;
