import { z } from 'zod';

export const messageSchema = z.object({
	content: z
		.string()
		.min(10, 'Content must be of at least 10 characters')
		.max(300, { message: 'Content should not longer than 300 characters' }),
});
