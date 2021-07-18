require("dotenv").config();
require("./db");
require("./models/Term");
const app = require("./server");

const PORT = process.env.PORT || 3000;

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
