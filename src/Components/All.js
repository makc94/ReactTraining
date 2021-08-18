import React, { useState, useMemo, useEffect } from "react";
// import Counter from "./Components/counter";
import "../styles/app.css";
// import Post from "./Components/post";
import PostList from "./PostList";

import PostForm from "./PostForm";
import MySelect from "./UI/select/MySelect";
// import Example from "./Components/example";
import MyInput from "./UI/Input/MyInput";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/Button/MyButton";
import Loader from "./UI/loader/Loader";
import axios from "axios";
import { useFetching } from "../hooks/useFetching";

function All() {
  const [posts, setPosts] = useState([]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);

  const [fetchPost,  postError] = useFetching(async ()=> {
      const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
  })

  useEffect(() => {
    fetchPost();
  }, []);

  

  const sortedPosts = useMemo(() => {
    console.log("Сортед пост работает");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <div>
        <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
          Создать пост
        </MyButton>
        {/* <button onClick={getFetch}>Получить пости</button> */}
        <hr style={{ color: "red", margin: "15px 5px" }} />
        <MyInput
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MySelect
          defaultVal="Сортировка..."
          options={[
            { value: "title", name: "Сортировка по названию" },
            { value: "body", name: "Сортировка по опису" },
          ]}
          value={selectedSort}
          onChange={sortPost}
        />
      </div>
      {sortedAndSearchedPosts.length > 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="JS"
        />
      ) : (
        <div style={{ display: "flex", justifyContent: "center", marginTop:'50px' }}>
          <Loader />{" "}
        </div>
      )}
      {postError &&
      <h1>Произошла ошибка ${postError}</h1>}

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
    </div>
  );
}

export default All;
