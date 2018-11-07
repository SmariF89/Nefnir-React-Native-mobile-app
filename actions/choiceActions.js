import {
	GET_ALL_CHOICES,
	GET_PARENT_CHOICES,
	ADD_IF_COMMON_CHOICE,
	ADD_PARENT_A_CHOICE,
	ADD_PARENT_B_CHOICE
} from '../constants/choiceConstants';

import {
	SET_PARENT_A_NAME,
	SET_PARENT_B_NAME
} from '../constants/parentConstants';

import { RESET_APP } from '../constants/AppConstants';

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

export const addIfCommon = choice => {
	return {
		type: ADD_IF_COMMON_CHOICE,
		payload: choice
	};
};

export const getSelectedChoices = choices => {
	return {
		type: GET_PARENT_CHOICES,
		payload: choices
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

export const resetAPP = () => {
	return {
		type: RESET_APP,
		payload: ''
	};
};
