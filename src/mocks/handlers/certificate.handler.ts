import { http, HttpResponse } from 'msw';

import { CategoryModel } from '@/api/certificate/certificate.type';
import { mockURL } from '@/mocks/handlers';

export const certificateHandlers = [
  // 게시글 작성
  http.get(mockURL('/certificate/category'), async () => {
    const category: CategoryModel[] = [
      {
        id: 1,
        title: 'string',
        middleCategory: [
          {
            id: 2,
            title: 'string',
          },
        ],
      },
    ];
    return HttpResponse.json(category, {
      status: 200,
      statusText: `category sented`,
    });
  }),
];
