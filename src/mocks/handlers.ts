import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:9090/user', () => {
    return HttpResponse.json({
      data: {
        name: '탁재민',
        age: 26,
      },
    });
  }),
];
