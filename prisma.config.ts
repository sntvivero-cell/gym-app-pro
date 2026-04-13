import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    // Pegamos tu URL real aquí, que es donde Prisma 7 la busca ahora
    url: "postgresql://postgres.tavjqlxtaekrxboxoxoo:KRmye9CwHeYh5Oys@aws-0-eu-west-1.pooler.supabase.com:5432/postgres",
  },
});