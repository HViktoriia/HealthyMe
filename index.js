const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.send("servak jest")
})

app.listen(8888, () => {
    console.log('Aplikacja wystrtowala na porcie 8888');
});