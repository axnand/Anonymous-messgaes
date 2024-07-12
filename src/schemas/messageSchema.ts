import { z } from "zod";

export const messageShcema = z.object({
    content: z
        .string()
        .min(10, { message: 'content must be more than 10 characters' })
        .max(300, { message: "Content must not be more than 300 characters" })
})
