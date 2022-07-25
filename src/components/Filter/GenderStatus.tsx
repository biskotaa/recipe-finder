import { useStore } from '../../store/store';
import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

const GenderStatus = () => {
  const setGender = useStore((state) => state.setGender);
  const gender = useStore((state) => state.genderStatus);
  return (
    <>
      <RadioGroup onChange={setGender} value={gender ? gender : undefined}>
        <Stack direction={['column', 'column', 'row']}>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="genderless">Genderless</Radio>
          <Radio value="unknown">Unknown</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default GenderStatus;
