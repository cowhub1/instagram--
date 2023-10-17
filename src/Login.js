import React, { useState, useEffect } from 'react';
import './login.css';
import './common.css';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [message, setMessage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleIdChange = (event) => {
    setIdValue(event.target.value);
  };

  const handlePwChange = (event) => {
    setPwValue(event.target.value);
  };

  const login = async () => {
    const data = await fetch(
      `http://127.0.0.1:8080/jsp/signin_proc.jsp?user-id=${idValue}&user-pw=${pwValue}`
    );
    const res = await data.json();

    setMessage(res.msg);

    if (res.code === true) {
      window.location = '/main';
    } else {
      alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.');
    }
  };

  useEffect(() => {
    // 이미지를 3초마다 변경하도록 설정
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4); // 이미지 인덱스 변경 (0, 1, 2, 3)
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머 해제
    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  const imageSources = [
    'img/screenshot1.png',
    'img/screenshot2.png',
    'img/screenshot3.png',
    'img/screenshot4.png',
  ];

  return (
    <div className="login">
      <div className="mainHome">
        <div className="screenchange">
          <img className="home_phone" src="img/home-phones.png" alt="핸드폰" />
          <img className="scs" src={imageSources[currentImageIndex]} alt={`Screenshot ${currentImageIndex + 1}`} />
        </div>
      </div>

      <div className="container">

        <div className="login_container">
          <img className="logo_text" src="img/logo_text.png" alt="로고" />
          <input
            type="text"
            className="input_login"
            name="id"
            placeholder="아이디 또는 이메일"
            value={idValue}
            onChange={handleIdChange}
          />
          <input
            type="password"
            className="input_login"
            name="pw"
            placeholder="비밀번호"
            value={pwValue}
            onChange={handlePwChange}
          />
          <br />
          <div id="messageDiv">{message}</div>
          <br />
          <button
            id="btn_login"
            onClick={login}
            style={{ backgroundColor: (idValue.length > 4 && pwValue.length > 2) ? 'blue' : '' }}
            disabled={!(idValue.length > 4 && pwValue.length > 2)}
          >
            로그인
          </button>
          <div className="or_line">
            <div className="line"></div>
            <div className="text">또는</div>
            <div className="line"></div>
          </div>
          <a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221ncvu4mqvl7bp1ibapzsisi7too19du1mzqas5mc48gl14fsj2f%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D164cee84-53c1-400c-8dfc-d23b7ea968ec%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221ncvu4mqvl7bp1ibapzsisi7too19du1mzqas5mc48gl14fsj2f%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0'>
            <span className='facebook_logo'><img src='img/facebook.png' /></span>
            <span className='facebook'>Facebook으로 로그인</span>
          </a>
          <a href="" className="underline2">
            비밀번호를 잊으셨나요?
          </a>
          <br />
        </div>

        <div className="account_join">
          <span className="question">
            <p>
              계정이 없으신가요?{' '}
              <a className="a" href="/join">
                <span className="underline">가입하기</span>
              </a>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;