import express from 'express';
const app = express();
import path from 'path';

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

import { search, dressUpload, dressImage } from './axios';

const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + './../client'));

app.post('/dressimage', dressImage); // 캔버스 파일 등록

// var multer = require("multer");
// var fs = require("fs");

// app.post('/dressimage', multer({dest: "./client/upload"}).array("uploads", 12), function(req, res) {
//     var fileInfo = [];
//     canvasData = request.body.dressImageData.length;
//     for(var i = 0; i < canvasData.length; i++) {
//         fileInfo.push({
//             "originalName": canvasData[i].originalName,
//             "size": req.files[i].size,
//             "b64": new Buffer(fs.readFileSync(req.files[i].path)).toString("base64")
//         });
//         fs.unlink(req.files[i].path);
//     }
//     res.send(fileInfo);
// });

app.post('/search', search); // 의류 검색

app.post('/upload', dressUpload); // 의류 촬영 업로드

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client', 'index.html'));
});

const port = 3030;

const server = app.listen(port, () => {
  console.log("Express listening on port", port);
});
