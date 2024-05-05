const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

export const encryptPassword = async (password: string): Promise<string> => {
   const salt = await bcrypt.genSalt(SALT_ROUNDS);
   return await bcrypt.hash(password, salt);
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
   return await bcrypt.compare(password, hash);
}