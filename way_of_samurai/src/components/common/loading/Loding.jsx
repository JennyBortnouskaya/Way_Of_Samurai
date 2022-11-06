import loading from '../../../assets/loading.gif';
import React from 'react';

let Loading = (props) => {
	return props.isFetching ? <img src={loading}/> : null
}
export default Loading;