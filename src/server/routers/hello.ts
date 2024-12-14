import Elysia from 'elysia';

export const hello = new Elysia().get('/hello', () => 'Hello Elysia');
