import React from 'react';
import {connect} from 'react-redux';
import {
	follow,
	setCurrentPage,
	setToggleIsFetching,
	setTotalUsersCount,
	setUsers,
	unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Loading from '../common/loading/Loding';
import {getUsers} from '../../api/api';


class UsersContainer extends React.Component {

	componentDidMount() {

		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
				this.props.setUsers(
					data.items
				);
				this.props.setTotalUsersCount(
					data.totalCount
				);
				this.props.setToggleIsFetching(false);
			}
		);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		getUsers(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.setUsers(
					data.items
				);
				this.props.setToggleIsFetching(false);
			});
	};

	render() {
		return <>
			<Loading isFetching={this.props.isFetching}/>
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}

			/>
		</>;
	}
}

//get store content
let mapStateToProps = (state) => {
	return {
		users: state.usersReducer.users,
		pageSize: state.usersReducer.pageSize,
		totalUsersCount: state.usersReducer.totalUsersCount,
		currentPage: state.usersReducer.currentPage,
		isFetching: state.usersReducer.isFetching
	};
};


export default connect(mapStateToProps, {

	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	setToggleIsFetching,

})(UsersContainer);