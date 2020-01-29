export function randomNumber(scope) {
  return Math.ceil(Math.random() * scope);
}

export function sideImgCheck(length, info, sideImgGap){
  let css = '';
  let imgInfo = {
      imgSrc: 'https://img.icons8.com/offices/50/000000/delete-link.png',
      imgWidth: 16,
      imgHeight: 16,
  };

  if(info.img === 'home'){
      imgInfo.imgSrc = 'https://img.icons8.com/dotty/80/000000/external-link-squared.png';
      imgInfo.imgWidth = 18;
      imgInfo.imgHeight = 18;

  }else if(info.img === 'person'){
      imgInfo.imgSrc = 'https://img.icons8.com/small/16/000000/external-link-squared.png';
      imgInfo.imgWidth = 16;
      imgInfo.imgHeight = 16;
  }else if(info.img === 'pin'){
      imgInfo.imgSrc = 'https://img.icons8.com/dotty/80/000000/external-link-squared.png';
      imgInfo.imgWidth = 18;
      imgInfo.imgHeight = 18;
  }else if(info.img === 'mail'){
      imgInfo.imgSrc = 'https://img.icons8.com/small/16/000000/external-link-squared.png';
      imgInfo.imgWidth = 15;
      imgInfo.imgHeight = 15;
  }else if(info.img === 'key'){
      imgInfo.imgSrc = 'https://img.icons8.com/dotty/80/000000/external-link-squared.png';
      imgInfo.imgWidth = 18;
      imgInfo.imgHeight = 18;
  }else if(info.img === 'check'){
      imgInfo.imgSrc = 'https://img.icons8.com/small/16/000000/external-link-squared.png';
      imgInfo.imgWidth = 17;
      imgInfo.imgHeight = 17;
  }
  
  for(let i = 1; i < length + 1; i++){
      css += `
          &:nth-child(${i}) .inputTitle{
              padding-left: ${imgInfo.imgWidth + sideImgGap}px;
          }
          &:nth-child(${i}) .inputTitle:before{
              content: '';
              display: block;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              width: ${imgInfo.imgWidth}px;
              height: ${imgInfo.imgHeight}px;
              background: url(${imgInfo.imgSrc}) no-repeat center;
              background-size: cover;
          }
      `;
  }
  return css;
}

export function makeOjb(kind){

  if(kind === "txtInput"){
    let compoConfig = {
      content: ''
    };
    let content = [
      {
        type: 'input:text',
        img: 'home',
        title: '업체명',
        height: 40,
        ft: 16,
        btn: {
          is: false,
          width: 60,
          color: 'white',
          bg: '#47A7DF',
          ft: 16,
          text: '',
        },
        tooltip: {
          is: false,
          type: 'under',
          text: 'test',
          color: '#54ACDF',
          ft: 12
        }
      },
      {
        type: 'input:text',
        img: 'person',
        title: '이름',
        height: 40,
        ft: 16,
        btn: {
          is: false,
          width: 60,
          color: 'white',
          bg: '#47A7DF',
          ft: 16,
          text: '확인',
        },
        tooltip: {
          is: false,
          type: 'under',
          text: 'test',
          color: '#54ACDF',
          ft: 12
        }
      },
      {
        type: 'select:location',
        img: 'location',
        title: '지역',
        title1: '선택',
        selectOption: ["국가 선택", "한국", "러시아", "미국", "중국"],
        selectOption1: ["선택", "서울", "대전", "대구", "부산"],
        height: 40,
        ft: 16,
        btn: {
          is: false,
          width: 60,
          color: 'white',
          bg: '#47A7DF',
          ft: 16,
          text: '',
        },
        tooltip: {
          is: false,
          type: 'under',
          text: 'test',
          color: '#54ACDF',
          ft: 12
        }
      },
      {
        type: 'input:email',
        img: 'mail',
        title: '이메일 주소',
        height: 40,
        ft: 16,
        btn: {
          is: true,
          width: 60,
          color: 'white',
          bg: '#47A7DF',
          ft: 16,
          text: '확인',
        },
        tooltip: {
          is: true,
          type: 'under',
          text: '* 사용 중인 이메일 주소입니다. 다른 메일주소를 입력해주세요.',
          color: '#54ACDF',
          ft: 12
        }
      },
      {
        type: 'input:password',
        img: 'key',
        title: '비밀번호',
        height: 40,
        ft: 16,
        btn: {
          is: false,
          width: 60,
          color: 'white',
          bg: '#47A7DF',
          ft: 16,
          text: '',
        },
        tooltip: {
          is: true,
          type: 'under',
          text: '* 8자 이상 16자 이하의 문자, 숫자 및 특수 문자를 조합하여 비밀번호를 설정해주세요.',
          color: '#54ACDF',
          ft: 12
        }
      },
      {
        type: 'input:password',
        img: 'check',
        title: '비밀번호 확인',
        height: 40,
        ft: 16,
        btn: {
          is: false,
          width: 60,
          color: 'white',
          bg: '#47A7DF',
          ft: 16,
          text: '확인',
        },
        tooltip: {
          is: true,
          type: 'under',
          text: '* 비밀번호가 일치하지 않습니다.',
          color: '#54ACDF',
          ft: 12
        }
      },
    ]
    compoConfig.content = content;
    return compoConfig;
  }
  
}