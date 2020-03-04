// https://randomfox.ca/floof/
// use the link above to do my axios call and retrieve the data needed for the app.

import axios from 'axios';

export const FETCHING_DOG_START = 'FETCHING_DOG_START';
export const FETCHING_DOG_SUCCESS = 'FETCHING_DOG_SUCCESS';
export const FETCHING_DOG_FAILURE = 'FETCHING_DOG_FAILURE';

export const getDog = () => (dispatch) => {
	// initially sending the action FETCHING_DOG_START so we get our initialState
	dispatch({ type: FETCHING_DOG_START });

	axios
		.get('https://dog.ceo/api/breeds/image/random')
		.then((res) => {
			console.log('res', res);
			dispatch({ type: FETCHING_DOG_SUCCESS, payload: res.data.message });
		})
		.catch((err) => {
			console.log('err', err);
			dispatch({
				type: FETCHING_DOG_FAILURE
			});
		});
};
