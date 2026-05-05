"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const desc = formData.get("desc")?.toString().trim();

  if (!title) {
    throw new Error("Le titre est obligatoire");
  }

  await prisma.todo.create({
    data: {
      title,
      desc: desc || "",
    },
  });

  revalidatePath("/");
}