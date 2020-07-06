import {AxiosInstance as instance} from "axios";

export const authAPI = {
    authMe() {
        return instance.get('auth/me').then((res) => res.data);
    },
    login(email, password, rememberMe, captcha) {
        return instance.post('auth/login', {
            email, password, rememberMe, captcha,
        }).then((res) => res.data);
    },
    logout() {
        return instance.delete('auth/login').then((res) => res.data);
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url').then((res) => res.data);
    },

};