import {
    GET_ALL_CHOICES,
    GET_PARENT_CHOICES,
    ADD_IF_COMMON_CHOICE,
    // GET_CHOICES_BY_LETTER,
    // GET_PARENT_A_CHOICES,
    ADD_PARENT_A_CHOICE,
    // REMOVE_PARENT_A_CHOICE,
    // CLEAR_ALL_PARENT_A_CHOICES,
    // GET_PARENT_B_CHOICES,
    ADD_PARENT_B_CHOICE
    // REMOVE_PARENT_B_CHOICE,
    // CLEAR_ALL_PARENT_B_CHOICES,
    // CLEAR_ALL_PARENT_CHOICES
} from "../constants/choiceConstants";

import {
    //GET_PARENT_A_NAME,
    SET_PARENT_A_NAME,
    //GET_PARENT_B_NAME,
    SET_PARENT_B_NAME
} from "../constants/parentConstants";

import { RESET_APP } from "../constants/AppConstants";

export const getAllChoices = () => {
    //console.log("getAllChoices");
    return async dispatch => {
        try {
            const response = await fetch(
                "https://hagstofa.is/media/49531/names.json"
            );
            const responseJson = await response.json();
            console.log("getAllChoices - data size:", responseJson.length);
            dispatch({ type: GET_ALL_CHOICES, payload: responseJson });
        } catch (err) {
            console.error(err);
        }
    };
};

export const addIfCommon = choice => {
  console.log("addIfCommon(payload): ", choice);
  return {
    type: ADD_IF_COMMON_CHOICE,
    payload: choice
  }
}

export const getSelectedChoices = choices => {
    return {
        type: GET_PARENT_CHOICES,
        payload: choices
    };
};

export const addParentAChoice = choice => {
  console.log("addparentAChoice(payload): ", choice);
    return {
        type: ADD_PARENT_A_CHOICE,
        payload: choice
    };
};

export const addParentBChoice = choice => {
    return {
        type: ADD_PARENT_B_CHOICE,
        payload: choice
    };
};

export const setParentAName = name => {
    console.log("ACTION: setParentAName - name =", name);
    return {
        type: SET_PARENT_A_NAME,
        payload: name
    };
};

export const setParentBName = name => {
    console.log("ACTION: setParentBName - name =", name);
    return {
        type: SET_PARENT_B_NAME,
        payload: name
    };
};

export const resetAPP = () => {
    console.log("ACTION: reset");
    return {
        type: RESET_APP,
        payload: ""
    };
};

// import fetch from 'isomorphic-fetch';
// export const getAllChoices = () => {
//     return dispatch => fetch('https://hagstofa.is/media/49531/names.json')
//         .then(json => json.json())
//         .then(data => dispatch(getAllChoicesSuccess(data)));
// };

// const getAllChoicesSuccess = names => {
//     return {
//         type: GET_ALL_CHOICES,
//         payload: names
//     };
// };
