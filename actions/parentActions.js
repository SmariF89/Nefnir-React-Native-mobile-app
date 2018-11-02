import {
    GET_PARENT_A_NAME,
    SET_PARENT_A_NAME,
    GET_PARENT_B_NAME,
    SET_PARENT_B_NAME
} from '../constants/parentConstants'

export const getParentAName = () => ({ type: GET_PARENT_A_NAME, payload: '' });
export const setParentAName = name => ({ type: SET_PARENT_A_NAME, payload: name });
export const getParentBName = () => ({ type: GET_PARENT_B_NAME, payload: '' });
export const setParentBName = name => ({ type: SET_PARENT_B_NAME, payload: name });
