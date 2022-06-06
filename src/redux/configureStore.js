import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Reducer, initialState } from './reducer';

// //creating redux store
// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer,
//         initialState
//     );
//     return store;
// };

export default configureStore({
    reducer: Reducer
});