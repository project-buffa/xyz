import express from 'express';
const app = express();
import path from 'path';
import mysql from 'mysql';

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
  database : 'xyz'
});

// connection.end();

connection.connect(function(err){
	if(err){
		console.log('mysql connect error', err);
	}
  console.log('connected mysql success');
});

// connection.query('select * from test', function(err, rows, fields){
//   if(err){
//     console.log('select query error', err);
//   }
  // console.log(rows);
  // console.log(fields);
  // for (var i=0; i<rows.length;i++){
  //   console.log(rows[i].name);
  // };
//   var temp = rows[0].name;
//   console.log("temp : ", temp);
// });

import { search, dressUpload } from './axios';

const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + './../client'));

app.post('/search', search); // 의류 검색

app.post('/upload', dressUpload); // 의류 촬영 업로드

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client', 'index.html'));
});

const port = 3030;

const server = app.listen(port, () => {
  console.log("Express listening on port", port);
});
