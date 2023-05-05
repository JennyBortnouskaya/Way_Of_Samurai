import Header from './Header';
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthData} from '../../redux/authReducer';

class HeaderContainer extends React.Component {

	componentDidMount() {
		//get server data
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					let {id, email, login} = response.data.data;
					this.props.setAuthData(id, email, login);
				}
			});
	}

	render() {
		return <Header {...this.props}/>;
	}
}

const mapStateToProps = (state) => ({
	isLogIn: state.authReducer.isLogIn,
	login: state.authReducer.login,
});
export default connect(mapStateToProps, {setAuthData})(HeaderContainer);