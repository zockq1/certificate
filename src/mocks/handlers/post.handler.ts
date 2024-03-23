import { http, HttpResponse } from 'msw';

import { mockURL } from '@/mocks/handlers';

export const postHandlers = [
  // 게시글 작성
  http.post(mockURL('/posts'), async (request) => {
    console.log(await request.request.json());
    // console.log(await request.request.headers.get('Authorization'));
    return HttpResponse.json(null, {
      status: 201,
      statusText: `post created`,
    });
  }),
];
