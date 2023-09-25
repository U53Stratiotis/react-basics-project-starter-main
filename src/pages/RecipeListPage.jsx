import { Heading, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { RenderCautions, RenderVegan, RenderDietLabel } from "../components/RenderDataFunctions";
import CardComponent from "../components/ui/Card";
import RecipePage from "./RecipePage";
import SearchBar from "../components/SearchBar";

export const RecipeListPage = () => {
  const initialRecipes = data.hits;

  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState(initialRecipes); 

  const handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchText(searchTerm);

    
    const filtered = initialRecipes.filter((recipe) => {
      const labelMatch = recipe.recipe.label.toLowerCase().includes(searchTerm);
      const healthLabelMatch = recipe.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchTerm)
      );
      return searchTerm === "" || labelMatch || healthLabelMatch;
    });

    setFilteredRecipes(filtered); 
  };

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsOpen(true);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
    setIsOpen(false);
    setFilteredRecipes(initialRecipes); // Reset filtered recipes to include all recipes
  };

  return ( 
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor="blue.400"
      minWidth="100vw"
      minHeight="100vh"
    >
      {!isOpen && (
        <Heading size="1xl" color="white" marginBottom="10" marginTop="5">
          Recipe Checker
        </Heading>
      )}
      {!isOpen && (
        <Flex
          direction="row"
          flexWrap="wrap"
          justify="center"
          marginBottom="10"
          width="40%"
        >
          <SearchBar onInputChange={handleInputChange} maxWidth="40%" />
        </Flex>
      )}
      <Flex direction="row" flexWrap="wrap" justify="center">
        {isOpen ? (
          <RecipePage
            recipe={selectedRecipe}
            onClick={() => handleCloseRecipe(selectedRecipe)}
          />
        ) : (
          filteredRecipes.map((recipe) => (
            <CardComponent
              key={recipe.recipe.label}
              image={recipe.recipe.image}
              label={recipe.recipe.label}
              mealType={recipe.recipe.mealType}
              healthLabels={recipe.recipe.healthLabels}
              dietLabels={recipe.recipe.dietLabels}
              cautions={recipe.recipe.cautions}
              dishType={recipe.recipe.dishType}
              // Functions for rendering data
              renderVegan={RenderVegan}
              renderDietLabel={RenderDietLabel}
              renderCautions={RenderCautions}
              onClick={() => handleCardClick(recipe)}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default RecipeListPage;






