import { z } from "zod";

export const acceptMessageShcema = z.object({
    acceptessages: z.boolean(),
})
