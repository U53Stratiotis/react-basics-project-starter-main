import { Box, Image, Flex, Text } from "@chakra-ui/react";
import {
  RenderCautions,
  RenderVegan,
  RenderDietLabel,
} from "../RenderDataFunctions";

const CardComponent = (props) => {
  const {
    image,
    label,
    mealType,
    healthLabels,
    dietLabels,
    cautions,
    dishType,
    onClick
  } = props;

   const handleCardClick = () => {
     onClick(); // Invoke the handleClick function when the card is clicked
   };

  return (
    <Box
      position="relative"
      borderRadius="25%"
      boxShadow="md"
      maxW="sm"
      maxH="25rem"
      minH="30rem"
      w="100%"
      m={4}
      bg="white"
      onClick={handleCardClick}
    >
      <Image
        w="100%"
        h="35%"
        src={image}
        alt={label}
        objectFit="cover"
        borderTopRadius="30%"
      />
      <Flex direction="column" alignItems="center" overflow="hidden">
        <Text fontSize="2rem" as="i">
          {mealType}
        </Text>
        <Text fontSize="rem" as="b">
          {label}
        </Text>
        <Flex direction="row" flexWrap="wrap" marginTop="2">
          {RenderVegan(healthLabels)}
        </Flex>
        <Flex direction="row" flexWrap="wrap" marginTop="2">
          {RenderDietLabel(dietLabels)}
        </Flex>
        <Text fontSize="1.2rem">Dish: {dishType}</Text>
        <Text fontSize="1rem">Cautions:</Text>
        <Flex direction="row" flexWrap="wrap">
          {RenderCautions(cautions)}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardComponent;
