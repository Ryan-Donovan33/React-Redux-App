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
				// spreading the state and if it is a success the initialState is calling the action.payload and passing it to the component
				...state,
				isFetching: false,
				dog: action.payload,
				error: ''
			};
		default:
			return state;
	}
};
