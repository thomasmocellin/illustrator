import { Pool } from 'pg';

let conn: any;

if (!conn) {
    conn = new Pool({
        user: process.env.PGSQL_USER,
        password: process.env.PGSQL_PASSWORD,
        host: process.env.PGSQL_HOST,
        port: process.env.PGSQL_PORT as any,
        database: process.env.PGSQL_DATABASE,
    });
}

export default conn;

export async function getImages(limit: number) {
    try {
        const query = `SELECT *
        FROM public.images
        ORDER BY id DESC
        LIMIT $1;`;
        const results = await conn.query(query, [limit]);
        return results;
    } catch (error) {
        console.log(error);
    }
}
