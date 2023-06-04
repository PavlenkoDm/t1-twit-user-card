import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://647c4f86c0bae2880ad08f0a.mockapi.io/api';

export const fetchUsers = async (page = 1, filter = 'All') => {
    if (filter === 'All') {
        try {
            Loading.circle();
            const response = await axios.get(`/users?page=${page}&limit=3`);
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
        } finally {
            Loading.remove();
        }
    }

    if (filter === 'Follow') {
        try {
            Loading.circle();
            const response = await axios.get(
                `/users?page=${page}&limit=3&isFollowed=false`
            );
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
        } finally {
            Loading.remove();
        }
    }

    if (filter === 'Followings') {
        try {
            Loading.circle();
            const response = await axios.get(
                `/users?page=${page}&limit=3&isFollowed=true`
            );
            return response.data;
        } catch (error) {
            Notify.failure(error.message);
        } finally {
            Loading.remove();
        }
    }
};

export const putchUserFollowing = async credentials => {
    const { id, isFollowed } = credentials;
    const data = JSON.stringify({ isFollowed: isFollowed });
    try {
        Loading.circle();
        const response = await axios.patch(
            `/users/${id}`, { data }, { headers: { 'Content-Type': 'application/json' } }
        );
        return response.data;
    } catch (error) {
        Notify.failure(error.message);
    } finally {
        Loading.remove();
    }
};
