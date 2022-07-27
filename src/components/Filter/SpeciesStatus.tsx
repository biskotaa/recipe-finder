import { useStore } from '../../store/store';
import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

const SpeciesStatus = ({
  setIsFiltered,
}: {
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const setSpecies = useStore((state) => state.setSpecies);
  const species = useStore((state) => state.speciesStatus);

  if (!!species) {
    setIsFiltered(true);
  }

  return (
    <>
      <RadioGroup onChange={setSpecies} value={species ? species : undefined}>
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
