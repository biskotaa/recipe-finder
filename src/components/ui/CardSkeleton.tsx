import { Skeleton, HStack, Stack, SkeletonText } from '@chakra-ui/react';

const CardSkeleton = () => {
  return (
    <HStack
      w="100%"
      h="250px"
      border="1px"
      borderColor="gray.700"
      borderRadius="6"
      alignItems="start"
    >
      <Skeleton borderLeftRadius="6" h="250px" w="35%" />
      <Stack w="65%" py="6" px="4" rowGap="3">
        <Skeleton h="40px" w="100%" />
        <Skeleton h="20px" w="100%" />
        <SkeletonText w="100%" />
      </Stack>
    </HStack>
  );
};

export default CardSkeleton;
