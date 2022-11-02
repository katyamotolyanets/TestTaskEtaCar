require('dotenv').config();
import * as trpcExpress from '@trpc/server/adapters/express';
import * as trpc from '@trpc/server';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import {z} from "zod";

const {API_URL} = process.env;

const appRouter = trpc.router()
    .query("getCurrencyById", {
        input: z.string(),
        resolve({input}) {
            return axios.get(`${API_URL}/assets/${input}`)
                .then(({data}) => data.data)
        }
    })
    .query("getLimitCurrenciesWithOffset", {
        input: z.object({
            limit: z.number(),
            offset: z.number()
        }),
        resolve({input: {limit, offset}}) {
            return axios.get(`${API_URL}/assets?limit=${limit}&offset=${offset}`)
                .then(({data}) => data.data)
        }
    })
    .query("fetchCurrenciesFromArray", {
        input: z.array(z.object({
            id: z.string(),
            price: z.string(),
            count: z.number()
        })),
        resolve({input}) {
            let promises = [];
            for (let element of input) {
                promises.push(
                    axios.get(`${API_URL}/assets/${element.id}`)
                        .then(({data}) => data.data)
                )
            }
            return axios.all(promises);
        }
    })
    .query("fetchCurrencyHistory", {
        input: z.string(),
        resolve({input}) {
            return axios.get(`${API_URL}/assets/${input}/history?interval=d1`)
                .then(({data}) => data.data)
        }
    });

export type AppRouter = typeof appRouter;

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});

const app = express();
app.use(cors());

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    })
);

app.listen(8080);
