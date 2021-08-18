import { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewTitle = (e) => {
    e.preventDefault();

    const obj = {...post,
        id: Date.now()
    }

    create(obj)
    setPost({ title: "", body: "" })
  
  };

  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="Заголовок"
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        type="text"
        placeholder="Описание"
      />
      <MyButton onClick={addNewTitle}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
