import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'houtai-blog',
  apiKey: process.env.API_KEY,
});
