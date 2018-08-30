let express = require('express');
let fs = require('fs');
let cors=require('cors');

let app = express();

app.use(cors());

app.get('/api/account-sales', function (req, res) {
   let fileData = fs.readFileSync('./sales_accounts.json');
   res.json(JSON.parse(fileData));
}).listen(5000,()=>console.log("server is running on port",5000))