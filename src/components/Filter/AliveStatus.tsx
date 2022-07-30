import { useStore } from '../../store/store';
import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

const AliveStatus = () => {
  const setAlive = useStore((state) => state.setAlive);
  const aliveStatus = useStore((state) => state.aliveStatus);

  return (
    <>
      <RadioGroup onChange={setAlive} value={aliveStatus ? aliveStatus : 1}>
        <Stack direction={['column', 'column', 'row']}>
          <Radio value="alive">Alive</Radio>
          <Radio value="dead">Dead</Radio>
          <Radio value="unknown">Unknown</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default AliveStatus;
