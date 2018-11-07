import {
	GET_ALL_CHOICES,
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
} from '../constants/choiceConstants';

import {
	//GET_PARENT_A_NAME,
	SET_PARENT_A_NAME,
	//GET_PARENT_B_NAME,
	SET_PARENT_B_NAME
} from '../constants/parentConstants';

export const getAllChoices = () => {
	return async dispatch => {
		try {
			const response = await fetch(
				'https://hagstofa.is/media/49531/names.json'
			);
			const responseJson = await response.json();
			dispatch({ type: GET_ALL_CHOICES, payload: responseJson });
		} catch (err) {
			console.error(err);
		}
	};
};

export const addParentAChoice = choice => {
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
	return {
		type: SET_PARENT_A_NAME,
		payload: name
	};
};

export const setParentBName = name => {
	return {
		type: SET_PARENT_B_NAME,
		payload: name
	};
};
