import axios from 'axios';

export default () => {
    let currentUserData = window.localStorage.currentUser;
    let currentUser = currentUserData ? JSON.parse(currentUserData) : '';
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8000/api',
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + currentUser.token
        }
    });
    axiosInstance.interceptors.response.use(function(response) {
        return response;
    }, function(error) {
        if (error.response.status === 401 || error.response.status === '401 Unauthorized') {
            window.localStorage.currentUser = JSON.stringify({});
        }
        return Promise.reject(error);
    })

    return axiosInstance;
}