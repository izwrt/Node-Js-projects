import { defineConfig } from 'drizzle-kit';

const config = defineConfig({
    dialect: "postgresql",
    out: "./drizzle",
    schema: "./drizzle/schema.ts",
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    }
});

export default config;