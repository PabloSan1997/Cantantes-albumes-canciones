import 'dotenv/config';

export const variables = {
    port:process.env.PORT||3000,
    url_database:process.env.DB_URL
}