const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

//user page store
let initialState = {
    users: []
};

//action processing
export const usersReducer = (store = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...store,
                users: store.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })

            };
        case UNFOLLOW:
            return {
                ...store,
                users: store.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...store,
                users: [...store.users, ...action.users]
            };

        default:
            return store;
    }
}

//action creator to follow a user
export const followAC = (userId) => ({
    type: FOLLOW,
    userId
});

//action creator to unfollow a user
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
});

//action creator to unfollow a user
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});