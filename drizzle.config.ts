/* eslint-disable check-file/filename-naming-convention */

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./src/lib/drizzle/schema/index.ts",
  out: "./src/lib/drizzle/output",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.SESSION_URL!,
  },
  // verbose: true,
  strict: true,
})