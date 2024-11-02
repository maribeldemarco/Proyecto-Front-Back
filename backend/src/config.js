import { config } from 'dotenv'

config();

const expressConfig = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST
}

export {
    expressConfig
}