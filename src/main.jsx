import { ChakraProvider } from '@chakra-ui/react';
// import React from 'react';
import ReactDOM from 'react-dom/client';
import RecipeListPage from './pages/RecipeListPage';
// import RecipePage from "./pages/RecipePage";

ReactDOM.createRoot(document.getElementById('root')).render(
  // Enable strict mode when looking for side effects. Strict mode enables double render
  // <React.StrictMode>
    <ChakraProvider>
      <RecipeListPage />
      {/* <RecipePage /> */}
    </ChakraProvider>
  // </React.StrictMode>,  
);
