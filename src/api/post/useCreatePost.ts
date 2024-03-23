import { useMutation } from '@tanstack/react-query';

import { CreatePostRequest } from '@/api/post/post.type';

import { api } from '../axios-config';

const createPost = async (postData: CreatePostRequest) => {
  return api.post('/posts', postData.body);
};

export function useCreatePosts() {
  return useMutation({
    mutationFn: createPost,
  });
}
