"use server";
import { RegisterSchemas } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchemas>) => {
  const validatedFields = RegisterSchemas.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "erro",
    };
  }
  return {
    success: "success",
  };
};
