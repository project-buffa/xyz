import multer from 'multer'; // 의류 촬영 업로드 기능을 위한 미들 웨어

// 의류 검색
export function search(request, response){
    console.log("server response : ", request.body.searchValue);
    response.json(request.body.searchValue);
};

// 의류 촬영 업로드
var storage = multer.diskStorage({ // 저장소 설정
  destination: function (request, file, callback) {
    callback(null, './client/upload'); // 저장 폴더 설정
  },
  filename: function (request, file, callback) {
  // console.log(file);
    callback(null, file.originalname);
  }
});

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