import { useStore } from '../../store/store';
import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

const GenderStatus = ({
  setIsFiltered,
}: {
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const setGender = useStore((state) => state.setGender);
  const gender = useStore((state) => state.genderStatus);

  if (!!gender) {
    setIsFiltered(true);
  }

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
