# REDUX-BUCHELI-COURSE-STRATEGIES-DUCKS-PATTERN

## REDUX-LESSONS-INSTRUCTOR-ANDRES-R.-BUCHELI

## Usage:

At this point, you may have begun thinking that store.js is getting pretty long, and yet the Recipes app only has three slices! Imagine trying to fit the logic for an application
with a dozen or more slices into one file. That would not be fun.

Instead, it is more common, and a better practice, to break up a Redux application using the Redux Ducks pattern, like so:

```
src/
|-- index.js
|-- app/
    |-- store.js
|-- features/
    |-- featureA/
        |-- featureASlice.js
    |-- featureB/
        |-- featureBSlice.js
```

As you can see in your coding workspace, this file structure has already been set up for you.

All of the Redux logic lives within the top-level directory called src/. It contains:

* The entry point for the entire application, index.js (we will return to this file in the next exercise).

* The sub-directories app/ and features/.

The src/app/ directory has only one file (for now), store.js. As before, the ultimate purpose of this file is to create the rootReducer and the Redux store. Now, however,
you’ll notice that the file is empty! So where did the reducers and action creators go?!

The src/features/ directory, and its own src/features/featureX/ sub-directories, contain all of the code relating to each individual slice of the store‘s state. For example,
for the state.favoriteRecipes slice, its slice reducer and action creators can be found in the file called src/features/favoriteRecipes/favoriteRecipesSlice.js.

Lucky for you, we took care of much of the tedious work involved in refactoring this code. In addition to creating new folders, new files, and copying over the relevant code, 
this refactor involved exporting each of the slice reducers and action creators, so that they could be imported back into store.js.

And that’s where you come in!
