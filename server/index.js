import express from 'express';
const app = express();
import path from 'path';
import multer from 'multer'; // 파일 업로드 기능을 위한 미들 웨어

app.use('/', express.static(__dirname + './../client'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './../client', 'index.html'));
});

app.get('/hello', (req, res) => {
  res.send("Can you hear me?");
});

var storage = multer.diskStorage({ // 저장소 설정
  destination: function (request, file, callback) {
    callback(null, './client/upload'); // 저장 폴더 설정
  },
  filename: function (request, file, callback) {
  // console.log(file);
    callback(null, file.originalname)
  }
});

var upload = multer({storage: storage}).single('uploadDress'); // form input type file name 설정

app.post('/upload', function(request, response) { // 파일 업로드 기능 구현
  upload(request, response, function(err) {
    if(err) {
      console.log('업로드 에러');
      return;
    }
    console.log(request.file); // 콘솔 창 확인
    // console.log(request.file.mimetype); // 마임 타입 확인
    const filetype = request.file.mimetype;
    if(filetype !== 'image/jpeg'){ // jpeg 에러일 때 
      console.log('type error');
      return response.redirect('/error'); // 에러일 때 보내는 리다이렉트 페이지
    }
    // response.end('Your File Uploaded');
    // console.log('Photo Uploaded');
    return response.redirect('/'); // 업로드 후 리다이렉트 설정
  })
});

const port = 3030;

const server = app.listen(port, () => {
  console.log("Express listening on port", port);
});
