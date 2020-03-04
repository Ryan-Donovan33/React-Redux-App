import { FETCHING_FOX_START, FETCHING_FOX_SUCCESS, FETCHING_FOX_FAILURE } from '../actions';

const initialState = {
	fox: '',
	isFetching: false,
	error: ''
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_FOX_START:
			return {};
		case FETCHING_FOX_SUCCESS:
			return {};
		default:
			return state;
	}
};
