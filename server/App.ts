require('dotenv').config();
import * as trpcExpress from '@trpc/server/adapters/express';
import * as trpc from '@trpc/server';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT;

const appRouter = trpc.router();

export type AppRouter = typeof appRouter;

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({})

const app = express();
app.use(cors());


app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    })
);

app.listen(PORT);
