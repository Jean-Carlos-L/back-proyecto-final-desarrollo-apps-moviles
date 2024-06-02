const crypto = require('crypto');

export const encryptPassword = async (password: string): Promise<string> => {
   const hash = crypto.createHash('sha256').update(password).digest('hex');
   return hash;
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
   const hashVerify = crypto.createHash('sha256').update(password).digest('hex');
  return hash === hashVerify;
}