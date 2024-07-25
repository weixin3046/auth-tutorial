"use server";
import bcrypt from "bcrypt";
import { RegisterSchemas } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";
import { getUserEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchemas>) => {
  const validatedFields = RegisterSchemas.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "erro",
    };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserEmail(email);
  if (existingUser) {
    return {
      error: "Email already in use!",
    };
  }
  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  // TODO: 发送token到你的邮箱
  return {
    success: "User created",
  };
};
