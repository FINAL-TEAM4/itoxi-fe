import axios from 'axios';
import { API_URL } from './base';
import { getCookie } from '@/utils/Cookie';

const api = axios.create({
  baseURL: 'https://petnuri.shop',
  headers: {
    //   Authorization:
    //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MjJAdGVzdC5jb20iLCJleHAiOjE2OTY0OTI0ODUsImlkIjo3Mywicm9sZSI6IlVTRVIifQ.Dxmmw1xCeqLq8HWEIWiirPGfEQbyUEuHv209vwL4E7o',
    // },
    Authorization: getCookie('jwtToken'),
  },
});

export const getMypage = async () => {
  try {
    const res = await api.get('/member/mypage');
    console.log('res:', res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (nickname: string, img: File | undefined) => {
  try {
    const formData = new FormData();

    if (img) {
      const fileBlob = new Blob([img], { type: img.type });
      formData.append('file', fileBlob);
    }
    // } else {
    //   formData.append('file', 'null');
    // }
    if (nickname != '') {
      formData.append(
        'nickname',
        new Blob([JSON.stringify({ nickname: nickname })], {
          type: 'application/json',
        })
      );
    }

    /*const res = await api.put('/member/mypage/profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });*/

    const res = await axios.put(
      'https://petnuri.shop/member/mypage/profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization:
          //   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MjJAdGVzdC5jb20iLCJleHAiOjE2OTY0OTI0ODUsImlkIjo3Mywicm9sZSI6IlVTRVIifQ.Dxmmw1xCeqLq8HWEIWiirPGfEQbyUEuHv209vwL4E7o',
          Authorization: getCookie('jwtToken'),
        },
      }
    );

    //const res = await api.put('/member/mypage/profile', { nickname: nickname });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const withdraw = async () => {
  try {
    const KAKAO_UNLINK_URI = 'https://kapi.kakao.com/v1/user/unlink';
    const kakaoToken = localStorage.getItem('kakaoAccessToken');

    await axios.post(
      KAKAO_UNLINK_URI,
      {}, // 빈 바디
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${kakaoToken}`,
        },
      }
    );

    const res = await api.delete('/member/mypage/withdraw');
    console.log('res:', res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const res = await api.post('/member/logout');
    console.log('res:', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const nickCheck = async (nickname: string) => {
  try {
    const res = await api.get(`/auth/nickname?nickname=${nickname}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};