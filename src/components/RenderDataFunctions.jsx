import { Text, Flex } from "@chakra-ui/react";

// If a recipe is open we want to show a more detailed description including
// healthlabels, mealType, total cooking time, servings, ingredients, diet type.

export const RenderCautions = (cautions ) => {
  return (
    <Flex direction="row" flexWrap="wrap">
      {cautions.map((caution, index) => (
        <Text
          key={index}
          display="inline"
          bg="red.200"
          fontSize="1rem"
          mt="0.2rem"
          mr="0.5rem"
          as="b"
          p={1}
        >
          {caution.toUpperCase()}
        </Text>
      ))}
    </Flex>
  );
};

export const RenderVegan = (healthLabels ) => {
  const filteredLabels = healthLabels.filter(
    (label) => label === "Vegan" || label === "Vegetarian"
  );
  
  return (
    <Flex direction="row" flexWrap="wrap" mt={2}>
      {filteredLabels.map((label, index) => (
        <Text
          key={index}
          display="inline"
          bg="purple.200"
          fontSize="1rem"
          mt="0.2rem"
          mr="0.5rem"
          as="b"
          p={1}
        >
          {label.toUpperCase()}
        </Text>
      ))}
    </Flex>
  );
};

export const RenderDietLabel = (dietLabels ) => {
  return (
    <Flex direction="row" flexWrap="wrap" mt={2}>
      {dietLabels.map((dietLabel, index) => (
        <Text
          key={index}
          bg="green.200"
          fontSize="rem"
          marginTop="2"
          mr="0.5rem"
          as="b"
          p={1}
        >
          {dietLabel.toUpperCase()}
        </Text>
      ))}
    </Flex>
  );
};

