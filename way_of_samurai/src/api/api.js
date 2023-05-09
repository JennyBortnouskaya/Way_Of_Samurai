import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '6923b870-8944-47cc-9df6-38538d743985'
	}
})

export const getUsers = (currentPage, pageSize) => {

	//get server data
	return instance.get(`users?page=${currentPage}&count=${pageSize}`,
		{
			withCredentials: true
		}
	).then(response => {
		return response.data
	})
};
