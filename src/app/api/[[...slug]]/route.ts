import { appRouter } from '@/server';

const handler = appRouter.handle;

export { handler as GET, handler as POST, handler as PATCH, handler as DELETE };
