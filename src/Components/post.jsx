import MyButton from "./UI/Button/MyButton";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <MyButton onClick={()=> props.remve(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default Post;
