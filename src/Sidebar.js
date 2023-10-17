import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import SearchModal from './SearchModal';


// 주어진 너비(width)와 열림 여부(isOpen)에 따라 사이드바의 위치와 상태를 제어
const Sidebar = ({ width = 280, isOpen, onSearch  }) => {
  //xPosition, setX 함수 : 사이드바의 가로 위치를 조정
  //초기에는 isOpen props에 따라 사이드바가 열려 있을 때는 0으로 설정하고, 그렇지 않을 때는 주어진 너비 값으로 설정
  const [xPosition, setX] = useState(isOpen ? 0 : width);
  const side = useRef();

  // 추가: 검색 모달 상태
  const [isSearchOpen, setSearchOpen] = useState(false);

  // button 클릭 시 toggleMenu 함수가 호출 : 현재의 가로 위치에 따라 사이드바가 열리거나 닫힙니다.
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
    } else {
      setX(width);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    // 가로 위치(xPosition)가 0일 때 외부 영역을 클릭하면 다시 너비 값으로 설정하여 사이드바를 닫음.
    if (!sideChildren && xPosition === 0) {
      setX(width);
    }
  };
      //컴포넌트가 렌더링될 때 window 객체의 click 이벤트 리스너를 등록하고, 컴포넌트 언마운트 시 해당 이벤트 리스너를 제거하는 기능
      useEffect(() => {
        window.addEventListener('click', handleClose);
        return () => {
          window.removeEventListener('click', handleClose);
        };
      }, [xPosition]);



  return (
    <div className={styles.container}>
      
      <div ref={side} className={styles.sidebar} style={{ width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)` }}>
      <button onClick={toggleMenu} className={styles.button}>
          {xPosition === 0 ? (
            <span className={styles.x}>🤍</span>
          ) : (
            <span className={styles.x}>🖤</span>
          )}
        </button>
        <div className={styles.content}>
          {/* //사이드바 컴포넌트 내부 값이 구현되는 위치 */}
          <nav className={styles.nav} >
            <div className={styles.nav - 1}>
              <div className={styles.head_logo}>
                <a href="/main"><img className={styles.logo_text} src="img/logo_text.png" alt="로고" /></a>
              </div>
            </div>
            <div className={styles.nav - 2}>
              <a href="/main">
                <div className={styles.menubar}>
                  <i class="fa-solid fa-house fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>홈</span>
                </div>
              </a>             
                <div className={styles.menubar} onClick={onSearch}>
                  <i class="fa-solid fa-magnifying-glass fa-2xl" style={{color: `#000000`}}></i>
                  <span className={styles.word}>검색</span>
                </div>

                {isSearchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}            
           
                <div className={styles.menubar}>
                  <i class="fa-regular fa-compass fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>탐색 탭</span>
                </div>
             
             
                <div className={styles.menubar}>
                  <i class="fa-regular fa-circle-play fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>릴스</span>
                </div>
              
              
                <div className={styles.menubar}>
                  <i class="fa-regular fa-paper-plane fa-2xl" style={{ color: `#000000` }} ></i>
                  <span className={styles.word}>메시지</span>
                </div>
             
              
                <div className={styles.menubar}>
                  <i class="fa-regular fa-heart fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>알림</span>
                </div>
             
         
                <div className={styles.menubar}>
                  <i class="fa-regular fa-square-plus fa-2xl" style={{ color: `#000000` }}></i>
                  <span className={styles.word}>만들기</span>
                </div>
              
             
                <div className={styles.menubar}>
                  <img className={styles.my_account} src="img/my_photo.jpg" alt="프로필" />
                  <a href="/profile" className={styles.word}>프로필</a>
                </div>
              
            </div>
          </nav >
        </div>

      </div>
    </div>
  );
};


export default Sidebar;