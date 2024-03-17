export interface UserModel {
  id: string;
  nickname: string;
}

export interface LoginRequest {
  body: { social: 'naver' | 'kakao'; code: string };
}

export interface LoginResponse {
  accessToken: string;
  isMember: boolean;
  nickname: string;
}

export interface SignupRequest {
  body: {
    nickname: string;
  };
}

export interface NicknameResponse {
  body: {
    nickname: string;
  };
}
