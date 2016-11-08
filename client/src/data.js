window.xyzUser = [
    {
        u_id: '', // 자동 생성 고유 값
        name: '', // 이름
        email: '', // 이메일
        social: '', // 구글이면 g, 페이스북 이면 f
        token: '', // 구글 또는 페이스북 토큰 값
        date: '' // 가입일
    }
];

window.xyzCategory = [
    {
        c_id: '', // 자동 생성 고유 값
        username: '', // 카테고리 이름
        date: '' // 등록일
    }
];

window.xyzDress = [
    {
        d_id: '', // 자동 생성 고유 값
        u_id: '', // xyzUser 테이블의 u_id 컬럼
        c_id: '', // xyzCategory 테이블의 c_id 컬럼 
        dressname: '', // 옷 이름
        f_id: '', // dressFile 테이블의 f_id 컬럼
        date: '', // 등록일
    }
];

window.dressFile = [
    {
        f_id: '', // 자동 생성 고유 값
        d_id: '', // xyzDress 테이블의 d_id 컬럼
        filename: '', // 업로드 파일명
        filesize: '', // 파일 사이즈
        fileformat: '', // 파일 종류 jpg, png 등
        date: '' // 등록일
    }
];

window.xyzDressCoordi = [
    {
        dc_id: '', // 자동 생성 고유 값
        setname: '', // 세트 이름
        dressset: [ 'd_id', 'd_id', 'd_id' ], // 구성 드레스 갯수에 따라 배열로 저장
        dressset_d_id_1: ''
        dressset_d_id_2: ''
        dressset_d_id_3: ''
        dressset_d_id_4: ''
        dressset_d_id_5: ''
        date: '' // 등록일
    }
];

window.feed = []; // coordi 에 대한 피드백 테이블 구성

window.xyzLogin = [
    {
        l_id: '', // 자동 생성 고유의 값
        u_id: '', // xyzUser 의 u_id 컬럼
        device: '', // 로그인 디바이스 정보 
        date: '' // 로그인 날짜
    }
];