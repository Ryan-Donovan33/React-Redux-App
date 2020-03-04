import { FETCHING_DOG_START, FETCHING_DOG_SUCCESS, FETCHING_DOG_FAILURE } from '../actions';

const initialState = {
	dog: null,
	isFetching: false,
	error: ''
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_DOG_START:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCHING_DOG_SUCCESS:
			return {
				...state,
				isFetching: false,
				dog: action.payload,
				error: ''
			};
		default:
			return state;
	}
};
