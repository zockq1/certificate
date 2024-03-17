import { postHandlers } from './post.handler';

export function mockURL(path: string) {
  return process.env.NEXT_PUBLIC_MOCK_API + path;
}

export const handlers = [...postHandlers];
