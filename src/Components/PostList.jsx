import { CSSTransition, TransitionGroup } from "react-transition-group";
import Post from "./post";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <TransitionGroup>
        {posts.map((item, index) => (
          <CSSTransition key={item.id} timeout={500} classNames="post">
            <Post remve={remove} number={index + 1} post={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
