import { z } from 'zod';

export const CreateMenu = z.object({
    MENU_NAME: z.string().min(1, "Menu name is required."),
    DESCRIPTION: z.string().min(1, "Description is required."),
    PRICE: z.number().positive("Price must be a positive number."),
    SIZE: z.enum(['Small', 'Medium', 'Large'], {
        errorMap: () => ({ message: "Size must be either 'Small', 'Medium', or 'Large'." })
    }),
    STATUS: z.boolean(),
    TYPE: z.enum(['Food', 'Drink'], {
        errorMap: () => ({ message: "Type must be either 'Food' or 'Drink'." })
    }),
    IMAGE: z.string().url("Image must be a valid URL.").optional(), // IMAGE can be optional or a valid URL if provided
});