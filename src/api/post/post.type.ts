import { UserModel } from '../auth/auth.type';
import { CertificateModel } from '../certificate/certificate.type';

export interface PostModel {
  id: number;
  user: Pick<UserModel, 'id' | 'nickname'>;
  title: string;
  content: string;
  images: File[];
  thumbnail: File;
  commentCount: number;
  createdAt: Date;
  certificate: Pick<CertificateModel, 'id' | 'title'>;
}

export interface CreatePostRequest {
  body: Pick<PostModel, 'title' | 'content' | 'images' | 'certificate'>;
}

export interface UpdatePostRequest extends CreatePostRequest {
  path: {
    postId: number;
  };
}

export interface GetPostListRequest {
  path: {
    certificateId: number;
  };
}

export type GetPostListResponse = Pick<
  PostModel,
  | 'id'
  | 'user'
  | 'title'
  | 'content'
  | 'createdAt'
  | 'thumbnail'
  | 'title'
  | 'commentCount'
>[];

export interface GetPostRequest {
  path: {
    postId: number;
  };
}

export type GetPostResponse = Pick<
  PostModel,
  'id' | 'user' | 'title' | 'content' | 'createdAt' | 'images' | 'title'
>;
