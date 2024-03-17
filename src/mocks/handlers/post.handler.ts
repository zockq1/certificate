import { http, HttpResponse } from 'msw';

import { mockURL } from '@/mocks/handlers';

export const postHandlers = [
  // 게시글 작성
  http.post(mockURL('/posts'), async (request) => {
    const body = await request.request.json();
    // console.log(await request.request.json());
    // console.log(await request.request.headers.get('Authorization'));
    return HttpResponse.json(body, {
      status: 202,
      statusText: 'Mocked status',
    });
  }),

  //   // 게시글 수정
  //   http.put(mock('/posts/:postId'), (req, res, ctx) => {
  //     const { postId } = req.params;

  //     // Here, simulate updating a specific post by its ID.
  //     return res(
  //       HttpResponse.json({
  //         message: `Post with ID ${postId} updated successfully`,
  //         // Include updated post data or any relevant information here.
  //       }),
  //     );
  //   }),

  //   // 게시글 삭제
  //   http.delete(mock('/posts/:postId'), (req, res, ctx) => {
  //     const { postId } = req.params;

  //     // Here, simulate the deletion of a specific post by its ID.
  //     return res(
  //       HttpResponse.json({
  //         message: `Post with ID ${postId} deleted successfully`,
  //       }),
  //     );
  //   }),

  //   // 게시글 목록 조회
  //   http.get(mock('/certificate/:certificateId/posts'), (req, res, ctx) => {
  //     const { certificateId } = req.params;

  //     // Here, simulate fetching a list of posts for a specific certificate.
  //     return res(
  //       HttpResponse.json({
  //         data: [
  //           {
  //             id: 1,
  //             user: {
  //               id: 1,
  //               nickname: 'User1',
  //             },
  //             title: 'Post Title 1',
  //             content: 'Content of post 1',
  //             thumbnail: 'path/to/thumbnail1.jpg',
  //             commentCount: 5,
  //             createdAt: new Date().toISOString(),
  //             // Add more post objects as needed.
  //           },
  //           // Repeat for more posts as required.
  //         ],
  //       }),
  //     );
  //   }),

  //   // 특정 게시글 조회
  //   http.get(mock('/posts/:postId'), (req, res, ctx) => {
  //     const { postId } = req.params;

  //     // Here, simulate fetching a specific post by its ID.
  //     return res(
  //       HttpResponse.json({
  //         data: {
  //           id: postId,
  //           user: {
  //             id: 2,
  //             nickname: 'User2',
  //           },
  //           title: 'Specific Post Title',
  //           content: 'Content of the specific post',
  //           images: ['path/to/image1.jpg', 'path/to/image2.jpg'],
  //           createdAt: new Date().toISOString(),
  //         },
  //       }),
  //     );
  //   }),
];
