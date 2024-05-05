require('dotenv').config()
import app from "./app";

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});