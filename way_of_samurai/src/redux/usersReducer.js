const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

//user page store
let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1
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
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...store,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...store,
                totalUsersCount: action.totalUsersCount
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

//action creator to open page with user list
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

//action creator to get total count of users from the server
export const setTotalUsersCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});