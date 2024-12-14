import Elysia from 'elysia';
import { hello } from './routers/hello';

export const appRouter = new Elysia({ prefix: '/api' }).use(hello).compile();

export type AppRouter = typeof appRouter;
