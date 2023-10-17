import React, { useState } from 'react';
import './commentForm.css';

//댓글을 작성하는 폼
function CommentForm({ addComment }) {
  //댓글을 추가하는 함수인 addComment를 props로 받음
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      
        const newComment = {
          userId: 'sw_Lim59', 
          text: comment
        };
        addComment(newComment);
        setComment('');
      
    }
  };

  return (
    //폼이 제출 -> handleSubmit 함수 : 새로운 댓글 객체를 생성 - > addComment 함수 : 새로운 댓글을 추가
    <form onSubmit={handleSubmit} className="comment-form">
      {/* 사용자가 입력한 댓글 : comment , handleCommentChange 함수 : comment 업데이트 */}
      <input className="comment-input" type="text"  placeholder="댓글 달기..."  value={comment}  onChange={handleCommentChange} />
      <button className="comment-button" type="submit">게시</button>
    </form>
  );
}

export default CommentForm;