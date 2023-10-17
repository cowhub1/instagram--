import React from 'react';

//댓글 목록을 표시, comments함수를 props해서 각 댓글을 리스트 형태로 표시
function CommentList({ comments }) {
  console.log(comments);
  return (
    //map() 함수 : 각 댓글을 <li> 요소로 변환 comment.userId와 comment.text을 포함
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <span className="userID">{comment.userId}</span>: {comment.text}
        </li>
      ))}
    </ul>
  );
}

export default CommentList;