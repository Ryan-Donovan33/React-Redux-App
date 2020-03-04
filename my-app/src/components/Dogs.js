import React from 'react';
import { connect } from 'react-redux';
import { getDog } from '../store/actions';

const Dogs = ({ getDog, dog, isFetching, error }) => {
	if (isFetching) {
		return <h2> What Dog Will It Be?! </h2>;
	}
	return (
		<div>
			<h2 className="Dog"> Dogs: {dog}</h2>
			<button onClick={getDog}>Find Which Out Dog!</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		dog: state.dog,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(mapStateToProps, { getDog })(Dogs);
