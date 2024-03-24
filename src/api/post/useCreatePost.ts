import { useMutation } from '@tanstack/react-query';

import { baseURL } from '@/api/fetch-config';
import { CreatePostRequest } from '@/api/post/post.type';

export const createPost = async (postData: CreatePostRequest) => {
  const res = await fetch(`${baseURL}/posts`, {
    method: 'POST',
    body: JSON.stringify(postData.body),
    next: {
      tags: ['post'],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export function useCreatePosts() {
  return useMutation({
    mutationFn: createPost,
  });
}
