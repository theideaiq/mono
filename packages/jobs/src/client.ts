import { Client } from '@upstash/qstash';
import { env } from '@theideaiq/env';

export const qstashClient = new Client({
  token: env.QSTASH_TOKEN,
});
