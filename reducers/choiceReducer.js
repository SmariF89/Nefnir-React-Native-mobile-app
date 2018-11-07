import {
    GET_ALL_CHOICES,
    ADD_PARENT_A_CHOICE,
    ADD_IF_COMMON_CHOICE,
    ADD_PARENT_B_CHOICE,
    CLEAR_ALL_PARENT_CHOICES
} from "../constants/choiceConstants";

import {
    SET_PARENT_A_NAME,
    SET_PARENT_B_NAME
} from "../constants/parentConstants";

import { RESET_APP } from "../constants/AppConstants";

const initialState = {
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
        case SET_PARENT_A_NAME:
            newState.parentA.name = action.payload;
            return newState;
        case SET_PARENT_B_NAME:
            newState.parentB.name = action.payload;
            return newState;
        case GET_ALL_CHOICES:
            return {
                ...state,
                allChoices: action.payload
            };
        case ADD_PARENT_A_CHOICE:
            if (state.parentA.choices.includes(action.payload)) {
                newState.parentA.choices = newState.parentA.choices.filter(
                    name => name != action.payload
                );
            } else {
                newState.parentA.choices = [
                    ...state.parentA.choices,
                    action.payload
                ];
            }
            return newState;
        case ADD_IF_COMMON_CHOICE:
            if (
                state.parentA.choices.includes(action.payload) &&
                state.parentB.choices.includes(action.payload)
            ) {
                return {
                    ...state,
                    commonChoices: [...newState.commonChoices, action.payload]
                };
            } else {
                return state;
            }
        case ADD_PARENT_B_CHOICE:
            if (state.parentB.choices.includes(action.payload)) {
                newState.parentB.choices = newState.parentB.choices.filter(
                    name => name != action.payload
                );
            } else {
                newState.parentB.choices = [
                    ...state.parentB.choices,
                    action.payload
                ];
            }
            return newState;
        case CLEAR_ALL_PARENT_CHOICES:
            return state;
        case RESET_APP:
            return {
                ...state,
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
        default:
            return state;
    }
};

export default choiceReducer;
