import React, { useEffect, useState } from 'react';
import './profile.css';
import Sidebar from './Sidebar';

function Profile() {
    const width = 280; // Sidebar의 너비

    // Sidebar를 기본적으로 열린 상태로 설정
    const [isOpen, setOpen] = useState(true);
    const [xPosition, setX] = useState(0);

    // 사이드바 외부 클릭 시 닫히지 않도록 빈 함수로 설정
    const handleClose = () => {};

    useEffect(() => {
        window.addEventListener('click', handleClose);
        return () => {
            window.removeEventListener('click', handleClose);
        };
    }, []);

    
    return (
        <section className="container">
          <Sidebar width={width} isOpen={isOpen} xPosition={xPosition}></Sidebar>
            <header className="header">
                <section className="h_inner">
                    <h1 className="logo">
                        <a href="index.html">
                            <div className="sprite_insta_icon"></div>
                            <div>
                                <div className="sprite_write_logo"></div>
                            </div>
                        </a>
                    </h1>

                    {/* <div className="search_field">
                        <input type="text" placeholder="검색" tabIndex="0" />

                        <div className="fake_field">
                            <span className='sprite_small_search_icon'></span>
                            <span>검색</span>
                        </div>
                    </div> */}

                    <div className="right_icons">
                        <a href="new_post.html"><div className="sprite_camera_icon"></div></a>
                        <a href="login.html"><div className="sprite_compass_icon"></div></a>
                        <a href="follow.html"><div className="sprite_heart_icon_outline"></div></a>
                        <a href="profile.html"><div className="sprite_user_icon_outline"></div></a>
                    </div>
                </section>
            </header>

            <div className="main_container">
                <section className="b_inner">
                    <div className="hori_cont">
                    <div className="profile_and_detail">
                        <div className="profile_wrap">
                            <div className="profile_img">
                                <img src="img/cow.jpg" alt="프로필사진" />
                            </div>
                        </div>

                        <div className="detail">
                            <div class="top">
                                <div className="user_name">sw_Lim59</div>
                                <a href="profile_edit.html" className="profile_edit">프로필편집</a>
                                <a href="#" className="seestory">보관된 스토리 보기</a>
                            </div>

                            <ul className="middle">
                                <li>
                                    <span>게시물</span>
                                    53
                                </li>
                                <li>
                                    <span>팔로워</span>
                                    359
                                </li>
                                <li>
                                    <span>팔로우</span>
                                    25
                                </li>
                            </ul>
                        </div>                  
                    </div>
                    <div className="highlight">
                        <ul className="highlightList">
                            <li className="topUser">
                                <a href="#">
                                    <img className="highlight_img" src="img/highlight1.jpg" alt="" />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#">
                                    <img className="highlight_img" src="img/highlight2.jpg" alt="" />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#">
                                    <img className="highlight_img" src="img/highlight3.jpg" alt="" />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#">
                                    <img className="highlight_img" src="img/highlight4.jpg" alt="" />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#">
                                    <img className="highlight_img" src="img/highlight5.jpg" alt="" />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#">
                                    <img className="highlight_img" src="img/highlight6.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="profileline"></div>
                    <div className="profile_box">
                        <span className="profiletag">게시물</span>
                        <span className="profiletag">저장됨</span>
                        <span className="profiletag">태그됨</span>
                    </div>

                    <div className="mylist_contents contents_container">
                        <div className="pic">
                            <a href="#"><img src="img/pro1.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"><img src="img/pro2.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="img/pro3.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="img/pro4.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="img/pro5.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="img/pro6.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="img/pro7.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="img/pro8.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="img/pro9.jpg" alt="" /></a>
                        </div>
                    </div>
                    
                    </div>

                    {/* <div className="bookmark_contents contents_container">
                        <div className="pic">
                            <a href="#"><img src="imgs/img_section/img03.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"><img src="imgs/img_section/img01.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img02.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img01.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img02.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img03.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img01.jpg" alt="" /></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img02.jpg" alt="" /></a>
                        </div>
                        <div class="pic">
                            <a href="#"> <img src="imgs/img_section/img02.jpg" alt="" /></a>
                        </div>
                    </div> */}
                </section>
            </div>
        </section>
    );
}

export default Profile