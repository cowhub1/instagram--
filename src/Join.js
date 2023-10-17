import React, { useState } from 'react';
import './join.css';
import './common.css';


function Join() {   
    // // 데이터베이스
    // const sqlite3 = require('sqlite3').verbose();
    // const db = new sqlite3.Database('mydatabase.db');
    // // 사용자 정보를 데이터베이스에 추가
    // const id = 1;
    // const email = 'john@example.com';
    // const fullname = 'john_doe';
    // const username = 'john';
    // const password = 1234;
   
    // db.serialize(() => {
    //     db.run('INSERT INTO users (id,email,fullname,username, password) VALUES (?, ?, ?, ?, ?)', [id,email,fullname,username, password], (err) => {
    //       if (err) {
    //         console.error('Error inserting data:', err.message);
    //       } else {
    //         console.log('Data inserted successfully');
    //       }
    //     });
    //   });
      
    //   db.close();

    const [idValue, setIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [userIdValue, setUserIdValue] = useState('');
    const [pwValue, setPwValue] = useState('');
    // const [message,setMessage]=useState('');
    
    const handleIdChange = (event) => {
        setIdValue(event.target.value);
      };
    const handleNameChange = (event) => {
        setNameValue(event.target.value);
      };
    const handleUserIdChange = (event) => {
        setUserIdValue(event.target.value);
      };
    
    const handlePwChange = (event) => {
        setPwValue(event.target.value);
      };

      const join = async () => {
        const datas = await fetch(
          `http://127.0.0.1:8080/jsp/signup_proc.jsp?user-id=${idValue}&user-pw=${pwValue}&user-name=${nameValue}&user-idname=${userIdValue}`
        );
        const res = await datas.json();
    
        // setMessage(res.msg);
    
        if (res.code === true) {
          // alert(res.msg)
          // alert('회원가입이 완료되었습니다.')
          window.location = '/login';
        } else {
          alert('회원가입에 실패했습니다.');
        }
      };


    return (
        <div className="join">
            <div className="container">
                <header className="logo">
                    <img className="logo_text" src="img/logo_text.png" alt="로고" />
                </header>
                    <div>
                        <span className="lets">친구들의 사진과 동영상을 보려면</span>
                        <span className="lets"> 가입하세요.</span>
                    </div>
                <div className="or_line">
                    <div className="line"></div>
                    <div className="text">회원가입</div>
                    <div className="line"></div>
                </div>
                <form name="join" action="" method="post">
                    <input 
                    className="addEmail" 
                    type="text" 
                    name="email" 
                    value={idValue}
                    onChange={handleIdChange}
                    placeholder="아이디 또는 이메일 주소" />

                    <input 
                    className="name" 
                    type="text" 
                    name="fullname" 
                    value={nameValue}
                    onChange={handleNameChange}
                    placeholder="성명" />

                    <input 
                    className="id" 
                    type="text" 
                    name="username" 
                    value={userIdValue}
                    onChange={handleUserIdChange}
                    placeholder="사용자 이름" />

                    <input 
                    className="pw" 
                    type="password" 
                    name="password" 
                    value={pwValue}
                    onChange={handlePwChange}
                    placeholder="비밀번호" />
                    {/* <div id="messageDiv">{message}</div> */}
                    <button 
                    type='button'
                    className="btn_join" 
                    onClick={join}
                    style={{ backgroundColor: (idValue.length > 4 && nameValue.length > 3 && userIdValue.length > 3 && pwValue.length > 2) ? 'blue' : '' }}
                    disabled={!(idValue.length > 4 && nameValue.length > 3 && userIdValue.length > 3  && pwValue.length > 2)}>가입</button>
                </form>
            </div>
            <div className="account_login">
                <span className="question">
                    <p>계정이 있으신가요?{' '}
                        <a className="a" href="/login">
                            <span className="underline">로그인</span>
                        </a>
                    </p>
                </span>
            </div>
        </div>
    ); 
}

export default Join;