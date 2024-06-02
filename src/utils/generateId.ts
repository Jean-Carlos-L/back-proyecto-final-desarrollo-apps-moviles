const { v4: uuidv4 } = require('uuid');

export async function generateUUID() {
    return uuidv4();
}


