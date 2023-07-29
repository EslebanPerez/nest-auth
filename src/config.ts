import { registerAs } from "@nestjs/config";

export default registerAs("config", () => {
    return {
        mongo:{
            dbname: process.env.DATABASE_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DP_PASSWORD,
            port: process.env.DB_PORT,
            hostname: process.env.DATABASE_HOST,
            connection: process.env.DB_CONNECTION,
            params: process.env?.PARAMS
        },
    };
});