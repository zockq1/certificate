import { UserModel } from '../auth/auth.type';

export interface CommentModel {
  id: number;
  user: Pick<UserModel, 'id' | 'nickname'>;
  content: string;
  createdAt: Date;
}

export interface PostCommentRequest {
  body: Pick<CommentModel, 'content'>;
  path: {
    postId: number;
  };
}

export interface PutCommentRequest {
  body: Pick<CommentModel, 'content'>;
  path: {
    commentId: number;
  };
}

export interface DeleteCommentRequest {
  path: {
    commentId: number;
  };
}

export interface GetCommentListRequest {
  path: {
    postId: number;
  };
}

export type GetCommentListResponse = CommentModel[];
