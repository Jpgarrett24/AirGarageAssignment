const port = 8000;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require("./routes/lots.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`))