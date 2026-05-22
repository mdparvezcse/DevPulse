import { neon } from "@neondatabase/serverless";
import { config } from "../config";
export const sql = neon(config.databaseURL as string);

export const initDB = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    hash TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'contributor',
    created_At TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_At TIMESTAMP NOT NULL DEFAULT NOW())
    `;

  await sql`
    CREATE TABLE IF NOT EXISTS issues
    (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    reporter_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_At TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_At TIMESTAMP NOT NULL DEFAULT NOW()
    )
    `;
  console.log("database connected successfully");

};