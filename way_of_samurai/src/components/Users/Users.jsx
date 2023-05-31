import styles from './Users.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {followingInProgress} from '../../redux/usersReducer';

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div className={styles.pageDiv}>
				{pages.map(p => {
					return <span className={props.currentPage === p && styles.selectedPage || styles.page}
								 key={p}
								 onClick={() => {
									 props.onPageChanged(p);
								 }}>{p}</span>;
				})}

			</div>
			{props.users.map(user =>

				<div key={user.id}>

                    <span>
                        <div>
							<NavLink to={'/profile/' + user.id}>
							<img
								src={user.photos.small != null ? user.photos.small : 'https://i.pinimg.com/564x/73/bb/3c/73bb3c20168614bcafe98d781c8fbef6.jpg'}
								className={styles.userPhoto}/>

							</NavLink>
							</div>
                        <div>
                            {user.followed
								? <button disabled={props.followingInProgress.some(id => id === user.id)}
										  onClick={() => {
											  props.followingInProgress(true, user.id);

											  //delete server data
											  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
												  {
													  withCredentials: true,
													  headers: {
														  'API-KEY': '6923b870-8944-47cc-9df6-38538d743985'
													  }
												  }
											  )
												  .then(response => {
														  if (response.data.resultCode === 0) {
															  props.unfollow(user.id);
														  }
														  props.followingInProgress(false, user.id);
													  }
												  );
										  }}> Unfollow </button>
								: <button disabled={props.followingInProgress.some(id => id === user.id)}
										  onClick={() => {
											  props.followingInProgress(true, user.id);

											  //post server data
											  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
												  {},
												  {
													  withCredentials: true,
													  headers: {
														  'API-KEY': '6923b870-8944-47cc-9df6-38538d743985'
													  }
												  }
											  )
												  .then(response => {
														  if (response.data.resultCode === 0) {
															  props.follow(user.id);
														  }
														  props.followingInProgress(false, user.id);
													  }
												  );
										  }}> Follow </button>
							}
                        </div>
                                </span>
					<span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                </span>
				</div>
			)}
		</div>
	);
};
export default Users;