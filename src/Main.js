import React, { useState } from 'react';
import './main.css';
import CommentForm from './CommentForm';
import Sidebar from './Sidebar';
import SearchModal from './SearchModal';

function Main() {
    const [isSearchOpen, setSearchOpen] = useState(false); // 검색 모달 상태 관리
    // 스토리 
    const [backoffStates, setBackoffStates] = useState(Array(6).fill(false)); // 6개의 이미지에 대한 backoff 상태 배열

    const openImageInNewWindow = (imageSrc, index) => {
        const updatedBackoffStates = [...backoffStates];
        updatedBackoffStates[index] = true;
        setBackoffStates(updatedBackoffStates);

        const windowWidth = 400; // 새 창의 너비
        const windowHeight = 400; // 새 창의 높이
        // 화면 가운데에 새 창을 띄우기 위한 위치 계산
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const left = (screenWidth - windowWidth) / 2;
        const top = (screenHeight - windowHeight) / 2;
        // 새 창을 열고 이미지를 표시
        const windowReference = window.open('', '', `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);
        windowReference.document.body.innerHTML = `<img src="${imageSrc}" alt="Image" style="max-width: 100%; height: auto;" />`;

        // 3초 후에 새 창을 닫고 이전 창으로 돌아가기
        setTimeout(() => {
            if (windowReference) {
                windowReference.close(); // 새 창 닫기
            }
        }, 3000);
    };

    // 댓글달기
    const [comments1, setComments1] = useState([]);
    const [comments2, setComments2] = useState([]);
    const addComment1 = (newComment) => {
        setComments1([...comments1, newComment]);
    };
    const addComment2 = (newComment) => {
        setComments2([...comments2, newComment]);
    };

    //좋아요
    const [liked, setliked] = useState(false);
    const handleClick = () => {
        setliked(!liked);
    };
    const [liked2, setliked2] = useState(false);
    const handleClick2 = () => {
        setliked2(!liked2);
    };

    return (
        <div className="main">
            {/* <Sidebar></Sidebar> */}
            <Sidebar onSearch={() => setSearchOpen(true)} /> {/* onSearch prop으로 함수 전달 */}
            {isSearchOpen && 
            <SearchModal onClose={() => setSearchOpen(false)} />}
            <main>
                <div className="feeds">
                    {/* 스토리 */}
                    <div className="top_Box">
                        <ul className="topUserList">
                            <li className="topUser">
                                <a href="#" onClick={() => openImageInNewWindow('img/flower.jpg', 0)}>
                                    <img className="top_photo" src="img/cat.jpg" alt="cat"
                                        style={{ border: backoffStates[0] ? 'none' : '3px solid transparent', backgroundImage: backoffStates[0] ? 'none' : 'radial-gradient(circle at bottom left, #F58529 20%, #C42D91)' }}
                                    />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#" onClick={() => openImageInNewWindow('img/trip1.jpg', 1)} >
                                    <img className="top_photo" src="img/nature.jpg" alt="nature"
                                        style={{ border: backoffStates[1] ? 'none' : '3px solid transparent', backgroundImage: backoffStates[1] ? 'none' : 'radial-gradient(circle at bottom left, #F58529 20%, #C42D91)' }} />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#" onClick={() => openImageInNewWindow('img/moon.jpg', 2)} >
                                    <img className="top_photo" src="img/cow.jpg" alt="cow"
                                        style={{ border: backoffStates[2] ? 'none' : '3px solid transparent', backgroundImage: backoffStates[2] ? 'none' : 'radial-gradient(circle at bottom left, #F58529 20%, #C42D91)' }} />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#" onClick={() => openImageInNewWindow('img/coffee.jpg', 3)}>
                                    <img className="top_photo" src="img/earth.jpg" alt="earth"
                                        style={{ border: backoffStates[3] ? 'none' : '3px solid transparent', backgroundImage: backoffStates[3] ? 'none' : 'radial-gradient(circle at bottom left, #F58529 20%, #C42D91)' }} />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#" onClick={() => openImageInNewWindow('img/trip2.jpg', 4)} >
                                    <img className="top_photo" src="img/heart.jpg" alt="heart"
                                        style={{ border: backoffStates[4] ? 'none' : '3px solid transparent', backgroundImage: backoffStates[4] ? 'none' : 'radial-gradient(circle at bottom left, #F58529 20%, #C42D91)' }} />
                                </a>
                            </li>
                            <li className="topUser">
                                <a href="#" onClick={() => openImageInNewWindow('img/trip3.jpg', 5)}>
                                    <img className="top_photo" src="img/animal.jpg" alt="animal"
                                        style={{ border: backoffStates[5] ? 'none' : '3px solid transparent', backgroundImage: backoffStates[5] ? 'none' : 'radial-gradient(circle at bottom left, #F58529 20%, #C42D91)' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* article */}
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
                                {liked ? (
                                    <img className="red-heart" src="img/liked.png" alt="빨간 하트" onClick={handleClick} />
                                ) : (
                                    <img className="icon-react" src="img/heart2.png" alt="하트" onClick={handleClick} />
                                )}
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
                            <div className="time-log">
                                <span>32분 전</span>
                            </div>
                            <div className="comment-section">
                                <ul className="comments">
                                    <li>
                                        <span><span className="userID">postmalone</span>나도 갈래~</span>
                                        <img className="comment-heart" src="img/heart.png" alt="하트" />
                                    </li>
                                    {comments1.map((comment, index) => (
                                        <li key={index}>
                                            <span>
                                                <span className="userID">{comment.userId}</span>
                                                {comment.text}
                                            </span>
                                            <img className="comment-heart" src="img/heart.png" alt="하트" />
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        </div>
                        <div className="comment">
                            <CommentForm addComment={addComment1} />
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
                                {liked2 ? (
                                    <img className="red-heart" src="img/liked.png" alt="빨간 하트" onClick={handleClick2} />
                                ) : (
                                    <img className="icon-react" src="img/heart2.png" alt="하트" onClick={handleClick2} />
                                )}
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
                            <div className="time-log">
                                <span>32분 전</span>
                            </div>
                            <div className="comment-section">
                                <ul className="comments">
                                    <li>
                                        <span><span className="userID">_jeongjaehyun</span>오오 맛있겠다!</span>
                                        <img className="comment-heart" src="img/heart.png" alt="하트" />
                                    </li>
                                    {comments2.map((comment, index) => (
                                        <li key={index}>
                                            <span>
                                                <span className="userID">{comment.userId}</span>{comment.text}</span>
                                            <img className="comment-heart" src="img/heart.png" alt="하트" />
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                        <div>
                            <CommentForm addComment={addComment2} />
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
                        </div>
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
        </div >

    );
}

export default Main;