const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const routs = require('./routes/index');
const cors = require('cors');
global['conf'] = require('./config').conf
const port = process.env.port || 1325
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "assets")))
app.use(routs)

app.listen(port, () => {
    console.log("Server started \r\nPORT:" + port + '\n\r' + "URL:http://localhost:" + port) 
})