const SET_USER_DATA = 'SET_USER_DATA';

//authentication store
let initialState = {
	usersId: null,
	email: null,
	login: null,
	isLogIn: false
};

//action processing
export const authReducer = (store = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...store,
				...action.data,
				isLogIn: true
			};
		default:
			return store;
	}
};

//action creator to set authentication user data
export const setAuthData = (userId, email, login) => ({
	type: SET_USER_DATA,
	data: {
		userId,
		email,
		login
	}
});