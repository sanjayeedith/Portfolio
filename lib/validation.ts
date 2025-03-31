import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  age: z.number().int().gte(18, 'Must be 18 or older'),
});
