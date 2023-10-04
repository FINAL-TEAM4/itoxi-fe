import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.34.154.62:8080/',
});

export const getMypage = async () => {
  try {
    const res = await api.get('/member/mypage');
    console.log('res:', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async () => {
  try {
    const res = await api.get('/member/mypage/profile');
    console.log('res:', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const withdraw = async () => {
  try {
    const res = await api.get('/member/mypage/withdraw');
    console.log('res:', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};