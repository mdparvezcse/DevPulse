import { sql } from "../../db";
import type { IUser } from "./auth.interface";
import bcrypt from "bcrypt";

const createUserDB = async (payload: IUser) => {
  const { name, email, password, role } = payload;
  const hash = await bcrypt.hash(password, 10);

  const result = await sql`
    INSERT INTO users (name, email, hash, role)
    VALUES (${name}, ${email}, ${hash}, COALESCE(${role}, 'contributor'))
    RETURNING *
    `;

const user = result[0];
if (!user) {
  throw new Error("Failed to create user");
}
delete user.hash;
return user;

};

export const authService = {
  createUserDB,
};
