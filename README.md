## Setup local environment

First install PG in your machine [PG for Windows](https://www.postgresql.org/download/windows/). Create local database in localhost:5432 with user USER.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Create tables using:

```
CREATE TABLE IF NOT EXISTS public.images
(
    id numeric NOT NULL,
    url character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT images_pk PRIMARY KEY (id)
)
```

Create user and give access using:

```
CREATE USER kevin WITH PASSWORD 'qkxeAxhGb9Xp5Ep3'
GRANT SELECT ON TABLE public.images TO kevin;
```

### Frontend

Run the nextJS app: `npm run dev`, and open [http://localhost:3005](http://localhost:3005). For more Next.JS info please check the [documentation](https://nextjs.org/docs/getting-started)
