import React, { useState } from 'react';
import './main.css';

function Main() {
    const [newWindow, setNewWindow] = useState(null);
    const [comments, setComments] = useState([]); // comments 배열 초기값 설정
    const [comment, setComment] = useState(''); // 댓글 상태 변수 추가


    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };
    // 댓글 게시 함수
    const postComment = () => {
        // 댓글 내용을 comments 배열에 추가하는 등의 작업을 수행
        // 여기에서는 comments 배열에 추가하는 예시를 보여줍니다.
        const newComment = {
            text: comment,
            // 다른 필요한 정보도 추가할 수 있음
        };

        // comments 배열에 새로운 댓글 추가
        setComments([...comments, newComment]); // 기존 댓글 목록에 새로운 댓글 추가

        setComment('');

        // 다른 필요한 작업 수행
    };

    const openImageInNewWindow = () => {
        // 새 창을 열고 이미지를 표시
        const windowReference = window.open('img/flower.jpg');
        setNewWindow(windowReference);

        // 10초 후에 새 창을 닫고 이전 창으로 돌아가기
        setTimeout(() => {
            if (windowReference) {
                windowReference.close(); // 새 창 닫기
            }
            const activeElement = document.querySelector('.topUser.active');
            if (activeElement) {
                activeElement.classList.remove('active');
            }
        }, 3000);

        // 댓글 입력 상태를 업데이트하는 함수
    };


    return (
        <div className="main">
            <nav>
                <div className="nav-container">
                    <div className="nav-1">
                        <a href="main.html"><img className="logo_text" src="img/logo_text.png" alt="로고" /></a>

                        <div className="dropdown">
                            <button className="dropdown-button">
                                <span className="arrow-icon">▼</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#" className="follow-icon">팔로잉</a><img src="img/smile.png" alt="팔로잉 아이콘" /></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a href="#" className="favorite-icon">즐겨찾기</a><img src="img/star4.png" alt="즐겨찾기 아이콘" /></li>
                            </ul>
                        </div>
                    </div>

                    <input id="searchInput" type="search" className="input-search" placeholder="검색" />
                    <div className="nav-2">
                        <a href="main.html"><img className="home" src="img/home.png" alt="홈" /></a>
                        <a href="#"><img className="plus" src="img/plus.png" alt="더보기" /></a>
                        <a href="#"><img className="heart" src="img/heart.png" alt="하트" /></a>
                        <a href="#"><img className="my_account" src="img/cow.jpg" alt="마이페이지" /></a>
                    </div>
                </div>
            </nav>

            <main>
                <div className="feeds">
                    <div className="top_Box">
                        <ul className="topUserList">
                            <li className="topUser">
                                <a href="#" onClick={openImageInNewWindow} className="active 1">
                                    <img className="top_photo" src="img/cat.jpg" alt="cat" /></a>
                            </li>
                            <li className="topUser">
                                <a href="#" className="active 2">
                                    <img className="top_photo" src="img/nature.jpg" alt="nature" /></a>
                            </li>
                            <li className="topUser">
                                <a href="#" className="active 3">
                                    <img className="top_photo" src="img/cow.jpg" alt="cow" /></a>
                            </li>
                            <li className="topUser">
                                <a href="#" className="active 4">
                                    <img className="top_photo" src="img/earth.jpg" alt="earth" /></a>
                            </li>
                            <li className="topUser">
                                <a href="#" className="active 5">
                                    <img className="top_photo" src="img/heart.jpg" alt="heart" /></a>
                            </li>
                            <li className="topUser">
                                <a href="#" className="active 6">
                                    <img className="top_photo" src="img/animal.jpg" alt="animal" /></a>
                            </li>
                        </ul>
                    </div>
                    <article>
                        <header>
                            <div className="profile-of-article">
                                <img className="img-profile-pic" src="img/my_photo.jpg" alt="seo_hee77님의 프로필 사진" />
                                <span className="userID">seo_hee77</span>
                            </div>
                            <img className="icon-react icon-more" src="/img/dot.png" alt="more" />
                        </header>

                        <div className="main-image">
                            <img src="img/photo.jpg" alt="seo_hee77님의 피드 사진" className="mainPic" />
                        </div>

                        <div className="icons-react">
                            <div className="icons-left">
                                <img className="icon-react" src="img/heart2.png" alt="하트" />
                                <img className="icon-react" src="img/review.png" alt="말풍선" />
                                <img className="icon-react" src="img/dm.png" alt="DM" />
                            </div>
                            <img className="icon-react" src="img/bookmark.png" alt="북마크" />
                        </div>

                        <div className="reaction">

                            <div className="liked-people">
                                <img className="pic" src="img/man.jpg" alt="johnnyjsuh님의 프로필 사진" />
                                <span className="userID">johnnyjsuh</span>님 <span className="point-span">외 51명이 좋아합니다.</span>
                            </div>

                            <div className="description">
                                <span className="userWrite">seo_hee77</span><span className="at-tag">런던💜</span>
                            </div>

                            <div className="comment-section">
                                <ul className="comments">
                                    {comments.map((comment, index) => (
                                        <li key={index}>
                                            <span>
                                                <span className="userID">seo_hee77</span>{comment.text}
                                            </span>
                                            <img className="comment-heart" src="img/heart.png" alt="하트" />
                                        </li>
                                    ))}
                                </ul>

                                <div className="time-log">
                                    <span>32분 전</span>
                                </div>
                            </div>
                        </div>


                        <div className="comment">
                            <input id="input-comment" className="input-comment" type="text" placeholder="댓글 달기..." value={comment}
                                onChange={handleCommentChange} />
                            <button className="submit-comment" onClick={postComment}>게시</button>
                        </div>
                    </article>

                    <article>
                        <header>
                            <div className="profile-of-article">
                                <img className="img-profile-pic" src="img/cow.jpg" alt="sw_Lim59님의 프로필 사진" />
                                <span className="userID">sw_Lim59</span>
                            </div>
                            <img className="icon-react icon-more" src="/img/dot.png" alt="more" />
                        </header>

                        <div className="main-image">
                            <img src="img/desert.jpg" alt="sw_Lim59님의 피드 사진" className="mainPic" />
                        </div>

                        <div className="icons-react">
                            <div className="icons-left">
                                <img className="icon-react" src="img/heart.png" alt="하트" />
                                <img className="icon-react" src="img/review.png" alt="말풍선" />
                                <img className="icon-react" src="img/dm.png" alt="DM" />
                            </div>
                            <img className="icon-react" src="img/bookmark.png" alt="북마크" />
                        </div>

                        <div className="reaction">

                            <div className="liked-people">
                                <img className="pic" src="img/girl.jpg" alt="_jeongjaehyun님의 프로필 사진" />
                                <span className="userID">_jeongjaehyun</span>님 <span className="point-span">외 203명이 좋아합니다.</span>
                            </div>

                            <div className="description">
                                <span className="userWrite">sw_Lim59</span><span className="at-tag">케이꾸</span>
                            </div>

                            <div className="comment-section">
                                <ul className="comments">
                                    <li>
                                        <span><span className="userID">_jeongjaehyun</span>오오 맛있겠다!</span>
                                        <img className="comment-heart" src="img/heart.png" alt="하트" />
                                    </li>
                                </ul>

                                <div className="time-log">
                                    <span>32분 전</span>
                                </div>
                            </div>
                        </div>

                        <div className="comment">
                            <input id="input-comment" className="input-comment" type="text" placeholder="댓글 달기..." />
                            <button className="submit-comment">게시</button>
                        </div>
                    </article>
                </div>


                <div className="App">
                    <div className="main-right">
                        <div className="myProfile">
                            <img className="pic" src="img/cow.jpg" alt="sw_Lim59님의 프로필 사진" />
                            <div>
                                <span className="userID point-span">sw_Lim59</span>
                                <span className="sub-span">SOWON LIM</span>
                            </div>
                        </div>
                        <div className="section-story">
                            <div className="menu-title">
                                <span className="sub-title">회원님을 위한 추천</span>
                                <span className="find-more">모두 보기</span>
                            </div>
                            {/*  */}
                            <ul className="story-list">
                                <li>
                                    <div className="gradient-wrap">
                                        <img className="img-profile-story" src="img/sky.jpg" alt="blue_sky님의 프로필 사진" />
                                    </div>
                                    <div className="profile-text">
                                        <span className="userID point-span">blue_sky</span>
                                        <span className="sub-span">1분 전</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gradient-wrap">
                                        <img className="img-profile-story" src="img/pretty.jpg" alt="taeyeon_ss님의 프로필 사진" />
                                    </div>
                                    <div className="profile-text">
                                        <span className="userID point-span">taeyeon_ss</span>
                                        <span className="sub-span">28분 전</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gradient-wrap">
                                        <img className="img-profile-story" src="img/cup.jpg" alt="dntlrdl님의 프로필 사진" />
                                    </div>
                                    <div className="profile-text">
                                        <span className="userID point-span">dntlrdl</span>
                                        <span className="sub-span">40분 전</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gradient-wrap">
                                        <img className="img-profile-story" src="img/exercise.jpg" alt="i_icaruswalks님의 프로필 사진" />
                                    </div>
                                    <div className="profile-text">
                                        <span className="userID point-span">i_icaruswalks</span>
                                        <span className="sub-span">56분 전</span>
                                    </div>
                                </li>
                            </ul>
                            {/*  */}
                        </div>
                        {/* <div className="section-recommend">
                            <div className="menu-title">
                                <span className="sub-title">회원님을 위한 추천</span>
                                <span className="find-more">모두 보기</span>
                            </div>
                            <ul className="recommend-list">
                            </ul>
                        </div> */}
                        <footer>
                            <p className="insta-sccript">
                                소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 ∙ <br />약관 ∙ 위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어
                                <br /><br />
                                © 2020 INSTAGRAM FROM FACEBOOK
                            </p>
                        </footer>
                    </div>
                </div>
            </main>
        </div>

    );
}

export default Main;