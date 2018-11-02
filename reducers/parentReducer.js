// import {
//     GET_PARENT_A_NAME,
//     SET_PARENT_A_NAME,
//     GET_PARENT_B_NAME,
//     SET_PARENT_B_NAME
// } from '../constants/parentConstants'

// const initialState = {
//     allChoices: [],
//     commonChoices: [],
//     parentA: {
//         name: "",
//         choices: []
//     },
//     parentB: {
//         name: "",
//         choices: []
//     }
// };

// const parentReducer = (state = initialState, action) => {
//     let newState = { ...state };
//     switch (action.type) {
//         case GET_PARENT_A_NAME:
//             return state.parentA.name;
//         case SET_PARENT_A_NAME:
//             newState.parentA.name = action.payload;
//             return newState;
//         case GET_PARENT_B_NAME:
//             return state.parentB.name;
//         case SET_PARENT_B_NAME:
//             newState.parentB.name = action.payload;
//             return newState;
//         default:
//             return state;
//     }
// };

// export default parentReducer;
