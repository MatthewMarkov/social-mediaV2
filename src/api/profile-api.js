import instance from "./api";

export const profileAPI = {
    getUserProfile(userID) {
        return instance.get(`profile/${userID}`).then((res) => res.data);
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`).then((res) => res.data);
    },
    updateStatus(status) {
        return instance.put('profile/status', { status }).then((res) => res.data);
    },
    updateUserProfileInformation(userInfo) {
        return instance.put('profile', userInfo).then((res) => res.data);
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res) => res.data);
    },
};
