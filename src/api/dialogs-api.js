import {AxiosInstance as instance} from "axios";

export const dialogsAPI = {
    sendMessage(userId, body) {
        return instance.post(`dialogs/${userId}/messages`, body).then((res) => res.data);
    },
    getDialogs() {
        return instance.get('dialogs');
    },
    geExactDialog(userId) {
        return instance.get(`dialogs/${userId}/messages`);
    },
    startChatting(userId) {
        return instance.put(`dialogs/${userId}`);
    },
    viewedMessage(messageId) {
        return instance.get(`dialogs/messages/${messageId}/viewed`);
    },
};
