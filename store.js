import { createStore, combineReducers } from 'redux';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';
import { favoriteRecipesReducer } from  '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js'


// Import the slice reducers here.

const reducers = {
  // Add the slice properties here
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer  
}

// Declare the store here.
export const store = createStore(combineReducers(reducers));
