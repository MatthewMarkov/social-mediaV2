import {AxiosInstance as instance} from "axios";

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    getUsersForSearch(term) {
        return instance.get(`users?term=${term}`)
            .then((response) => response.data);
    },
    follow(userID) {
        return instance.post(`follow/${userID}`);
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`);
    },
};