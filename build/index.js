'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// 파일 업로드 기능을 위한 미들 웨어

app.use('/', _express2.default.static(__dirname + './../client'));

// app.get('/hello', (req, res) => {
//   res.send("Can you hear me?");
// });

var storage = _multer2.default.diskStorage({ // 저장소 설정
  destination: function destination(request, file, callback) {
    callback(null, './client/upload'); // 저장 폴더 설정
  },
  filename: function filename(request, file, callback) {
    // console.log(file);
    callback(null, file.originalname);
  }
});

var upload = (0, _multer2.default)({ storage: storage }).single('uploadDress'); // form input type file name 설정

app.post('/upload', function (request, response) {
  // 파일 업로드 기능 구현
  upload(request, response, function (err) {
    if (err) {
      console.log('업로드 에러');
      return;
    }
    console.log(request.file); // 콘솔 창 확인
    // response.end('Your File Uploaded');
    // console.log('Photo Uploaded');
    return response.redirect('/'); // 업로드 후 리다이렉트 설정
  });
});

var port = 3030;

var server = app.listen(port, function () {
  console.log("Express listening on port", port);
});