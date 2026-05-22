import dotenv from "dotenv"
import { env } from "process"

dotenv.config()

export const config = {
    port : env.PORT,
    databaseURL: env.databaseURL
}