const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dir = `${__dirname}/public/`;

// starting the server
app.listen( port , () => console.log(`Server started, listening port: ${port}`));

app.get("/", (req, res) => {
    res.sendfile(dir + "index.html");
});