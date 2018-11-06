import {
    GET_ALL_CHOICES,
    GET_CHOICES_BY_LETTER,
    GET_PARENT_A_CHOICES,
    ADD_PARENT_A_CHOICE,
    REMOVE_PARENT_A_CHOICE,
    CLEAR_ALL_PARENT_A_CHOICES,
    GET_PARENT_B_CHOICES,
    GET_PARENT_CHOICES,
    ADD_PARENT_B_CHOICE,
    REMOVE_PARENT_B_CHOICE,
    CLEAR_ALL_PARENT_B_CHOICES,
    CLEAR_ALL_PARENT_CHOICES
} from "../constants/choiceConstants";

import {
    //GET_PARENT_A_NAME,
    SET_PARENT_A_NAME,
    //GET_PARENT_B_NAME,
    SET_PARENT_B_NAME
} from "../constants/parentConstants";

const initialState = {
    // fetching: false,
    // error: undefined,
    allChoices: [],
    commonChoices: [],
    parentA: {
        name: "",
        choices: []
    },
    parentB: {
        name: "",
        choices: []
    }
};

const choiceReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        // case GET_PARENT_A_NAME:
        //     return state.parentA.name;
        case SET_PARENT_A_NAME:
            newState.parentA.name = action.payload;
            return newState;
        // case GET_PARENT_B_NAME:
        //     return state.parentB.name;
        case SET_PARENT_B_NAME:
            newState.parentB.name = action.payload;
            return newState;

        case GET_ALL_CHOICES:
            return {
                ...state,
                allChoices: action.payload
            };
        case GET_CHOICES_BY_LETTER:
            return state;

        case GET_PARENT_A_CHOICES:
            return state;
        case ADD_PARENT_A_CHOICE:
            newState.parentA.choices.push(action.payload);
            return newState;
        case REMOVE_PARENT_A_CHOICE:
            return state;
        case CLEAR_ALL_PARENT_A_CHOICES:
            return state;

        case GET_PARENT_B_CHOICES:
            return state;
        case ADD_PARENT_B_CHOICE:
            newState.parentB.choices.push(action.payload);
            return newState;
        case REMOVE_PARENT_B_CHOICE:
            return state;
        case CLEAR_ALL_PARENT_B_CHOICES:
            return state;

        case CLEAR_ALL_PARENT_CHOICES:
            return state;
        case GET_PARENT_CHOICES:
            return {
                choices: [...newState.parentA, ...newState.parentB]
            };
        default:
            return state;
    }
};

export default choiceReducer;
