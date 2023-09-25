import { Center, Image, Box, Text, Flex, IconButton, Grid } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const RecipePage = (props) => {
  
  const {
    image,
    label,
    mealType,
    totalTime,
    yield: servings,
    ingredientLines,
    healthLabels,
    dietLabels,
    cautions,
    totalNutrients,
  } = props.recipe.recipe;

  const responsiveFontSizes = {
    base: "1rem",  // Font size maller screens (base)
    sm: "1.2rem",  // Font size small screens (sm)
    md: "1.4rem",  // Font size medium screens (md)
    lg: "1.6rem",  // Font size larger screens (lg)
  };

  const { onClick } = props;
  
     const handleCardClick = () => {
       onClick(); // Invoke the handleClick function when the card is clicked
     };

  // const isMobileView = useBreakpointValue({ base: true, md: false });
     
  return (
    <>
        <Box
          height="100%"
          maxWidth="100%"
          bg="white"
          boxShadow="md"
          overflow="auto"
          overflowX="hidden"
        >
          <Flex direction="row" align="center" mt={4} ml={4} >
            <IconButton
              aria-label="Return"
              icon={<ArrowBackIcon />}
              onClick={handleCardClick}
              bg="transparent"
              border="none"
              _hover={{ color: "blue.200" }}
              fontSize="xl"
            />
            <Text
              align="center"
              fontFamily="Arial"
              fontWeight="black"
              fontSize="1rem"
              >
              Recipe Checker
            </Text>
            </Flex>
          <Image
            w="100%"
            maxH="25vh"
            src={image}
            alt={label}
            objectFit="cover"
            mb={4}
            mt={18}
          />
          <Flex direction={{ base: "column", md: "row" }}>
            {/* Here we have the left side of the component */}
            <Box
              p={4}
              mr={{ base: 0, md: 4 }}
              mb={{ base: 4, md: 0 }}
              ml={8}
              width="50%"
              height="100%"
              fontFamily="Arial"
            >
              <Text color="gray.600" fontSize={["0.6rem", "0.8rem", "1rem", "1.2rem"]} textTransform="uppercase" >
                {mealType}
              </Text>
              <Text
                fontFamily="Arial"
                fontWeight="black"
                fontSize={["0.6rem", "0.8rem", "1rem", "1.4rem"]} 
                textTransform="uppercase"
              >
                {label}
              </Text>
              <Text mt={3} fontSize={["0.6rem", "0.8rem", "1rem", "1.2rem"]}>
                Total cooking time:{" "}
                <Text as="span" fontWeight="semibold">
                  {totalTime} minutes
                </Text>
              </Text>
              <Text fontSize={["0.8rem", "1rem", "1.2rem", "1.2rem"]}>
                Servings:{" "}
                <Text as="span" fontWeight="semibold">
                  {servings}
                </Text>
              </Text>
              <Flex direction="column">
                <Text mt={4} fontSize={["1rem", "1.2rem", "1.2rem", "1.3rem"]} fontWeight="bold">
                  Ingredients:
                </Text>
                {ingredientLines.map((ingredient, index) => (
                  <Text key={index} mt={2} fontSize={["0.6rem", "0.8rem", "0.9rem", "1rem"]}>
                    {ingredient}
                  </Text>
                ))}
              </Flex>
            </Box>

            {/* Here we have the right side of the component */}
            <Box p={4} ml={8} width="50%" height="100%" fontFamily="Arial">
              {/* <Flex direction="row" flexWrap="wrap"> */}
                  <Text mb={1.5}  fontSize={["1rem", "1.1rem", "1.2rem", "1.3rem"]}>
                    Healthlabels:
                  </Text>
              <Grid
                templateColumns={{
                  base: '1fr',    // On smaller screens, display labels stacked
                  sm: 'repeat(auto-fill, minmax(120px, 1fr))', // On larger screens, display horizontally with minimum width of 120px
                }}
                gap={1}  // Adjust this value to control the spacing between labels
                >
                {healthLabels.map((label) => (
                  <Text
                    key={label}
                    backgroundColor="purple.200"
                    fontSize={["0.6rem", "0.7rem", "0.8rem", "0.9rem"]}
                    fontWeight="semibold"
                    mb="0.6rem"
                    mr="0.6rem"
                    as="b"
                    px={1}
                  >
                    {label}
                  </Text>
                ))}
                </Grid>
              {/* </Flex> */}
              <Text mb={1.5} fontSize="1rem">
                Diet:
              </Text>
              <Flex direction="row" flexWrap="wrap">
                {dietLabels.map((label, index) => (
                  <Text
                    key={index}
                    mr={2}
                    fontSize="0.9rem"
                    fontWeight="semibold"
                    backgroundColor="green.200"
                    as="b"
                    px={1}
                  >
                    {label}
                  </Text>
                ))}
              </Flex>
              <Text mt={2} mb={1.5} fontSize="1rem">
                Cautions:
              </Text>
              <Flex direction="row" flexWrap="wrap">
                {cautions.map((caution, index) => (
                  <Text
                    key={index}
                    mr={2}
                    fontSize="0.9rem"
                    fontWeight="semibold"
                    backgroundColor="red.200"
                    as="b"
                    px={1}
                  >
                    {caution}
                  </Text>
                ))}
              </Flex>
              <Text
                mt={2}
                mb={1.5}
                fontWeight="semibold"
                fontSize="1rem"
              >
                Total nutrients:
              </Text>
              <Grid
                templateColumns={{
                  base: '1fr',    // On smaller screens, display labels stacked
                  sm: 'repeat(auto-fill, minmax(120px, 1fr))', // On larger screens, display horizontally with minimum width of 120px
                }}
                gap={1}  // Adjust this value to control the spacing between labels
                >
              <Flex direction="row" flexWrap="wrap">
                <Flex direction="column" flexWrap="wrap" mr={8}>
                  <span>{Math.round(totalNutrients.ENERC_KCAL.quantity)}</span>
                  <span style={{ fontWeight: "bold" }}>CALORIES</span>
                </Flex>
                <Flex direction="column" flexWrap="wrap" mr={8}>
                  <span>{Math.round(totalNutrients.CHOCDF.quantity)}</span>
                  <span style={{ fontWeight: "bold" }}>CARBS</span>
                </Flex>
                <Flex direction="column" flexWrap="wrap" mr={8}>
                  <span>{Math.round(totalNutrients.PROCNT.quantity)}</span>
                  <span style={{ fontWeight: "bold" }}>PROTEIN</span>
                </Flex>
                <Flex direction="column" flexWrap="wrap" mr={30}>
                  <span>{Math.round(totalNutrients.FAT.quantity)}</span>
                  <span style={{ fontWeight: "bold" }}>FAT</span>
                </Flex>
              </Flex>
              <Flex direction="row" flexWrap="wrap">
                <Flex direction="column" flexWrap="wrap" mr={30}>
                  <span>{Math.round(totalNutrients.FAT.quantity)}</span>
                  <span style={{ fontWeight: "bold" }}>CHOLESTEROL</span>
                </Flex>
                <Flex direction="column" flexWrap="wrap">
                  <span>{Math.round(totalNutrients.NA.quantity)}</span>
                  <span style={{ fontWeight: "bold" }}>SODIUM</span>
                </Flex>
                
              </Flex>
              </Grid>
            </Box>
          </Flex>
        </Box>
    </>
  );
};

export default RecipePage;