import React from "react";
import classPost from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classPost.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU' alt='avatar'></img>
      { props.message }
        <div>
          <span>{ props.likeCounts } likes</span>
        </div>
    </div>
  )
}

export default Post;