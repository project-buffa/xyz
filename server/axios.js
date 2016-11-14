import multer from 'multer'; // 의류 촬영 업로드 기능을 위한 미들 웨어
import fs from 'fs'; // 파일 저장을 위한 ..
import mysql from 'mysql';

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
  database : 'xyz'
});

connection.connect(function(err){
	if(err){
		console.log('mysql connect error', err);
	}
  console.log('connected mysql success');
});

// 리덕스 액션 의류 검색
export function search(request, response){
  console.log("server response : ", request.body.searchValue);
  response.json(request.body.searchValue);
};

// multer 저장소 설정
var storage = multer.diskStorage({ // 저장소 설정
  destination: function (request, file, callback) {
    callback(null, './client/upload'); // 저장 폴더 설정
  },
  filename: function (request, file, callback) {
  // console.log(file);
    callback(null, file.originalname);
  }
});

// 캔버스 파일 등록 base64 디코딩 이미지 저장
export function dressImage(request, response){
	// console.log('server response :', request.body.dressImageData);
	response.json(request.body.dressImageData);

  var canvasdata = request.body.dressImageData.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(canvasdata, 'base64');

  var datanamerandom = Math.floor(Math.random() * 1000000) + 1;
  var nowTime = new Date();
  // var dataname = nowTime.getFullYear()+''+nowTime.getMonth()+''+nowTime.getDate()+''+nowTime.getTime()+''+datanamerandom;
  var dataname = datanamerandom;

  fs.writeFile('./client/upload/'+dataname+'.jpg', buf, function(err) {
    if (err) throw err;
    console.log('canvas image '+dataname+' save success');
  });

  var u_id = '20';
  var c_id = '2';

  connection.query('insert into xyzDress(u_id, c_id, dressname) values ('
    + connection.escape(u_id) + ','
    + connection.escape(c_id) + ','
    + connection.escape(dataname) + ' );' , function(err, rows, fields){
    if(err){
      console.log('insert query error', err);
    }
  });

};

// 등록된 의류 가져오기
export function dressList(request, response) {
  connection.query('select * from xyzDress', function(err, rows, fields){
    if(err){
      console.log('select xyzDress query error', err);
    }
    response.send(rows);
    // console.log(rows);
    // console.log(fields);
    // for (var i=0; i<rows.length;i++){
    //   console.log(rows[i].dressname);
    // };
  });
};

// 등록된 카테고리 가져오기
export function dressCategory(request, response) {
  connection.query('select * from xyzCategory', function(err, rows, fields){
    if(err){
      console.log('select xyzCategory query error', err);
    }
    response.send(rows);
    // console.log(rows);
    // console.log(fields);
    // for (var i=0; i<rows.length;i++){
    //   console.log(rows[i].dressname);
    // };
  });
};

// 의류 촬영 업로드
const upload = multer({storage: storage}).single('uploadDress'); // form input type file name 설정

export function dressUpload(request, response) { // 파일 업로드 기능 구현
  // 파일 업로드를 디비와 연동하여 구현 할 때 동일 파일 예외 처리
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
    
    return response.redirect('/mydress'); // 업로드 후 리다이렉트 설정
  })
};

// connection.end();