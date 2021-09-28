import { useState, useEffect, useCallback } from "react";
import "./styles.css";
import { PostsProps } from "./types";
import { fetchPosts, savePost } from "./services/api.service";
import Header from "./components/header.component";
import PostsList from "./components/posts.list.component";
import NewPost from "./components/card.new.post.component";
import logo from "./assets/small.png";
import Pagination from "./components/pagination.component";

// Arguments for the new post api call
const title = "Inês Maio";
const userProfileImgUrl = logo;

const App = () => {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [newPostVisible, setNewPostVisible] = useState<boolean>(false);
  const [validation, setValidation] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<number>();

  // Set curPage, pagination, posts state.
  // It will run every time validation or curPage state changes
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchPosts(validation, 1);
        setPosts(res.posts);
        setNextPage(res.next_page);
      } catch {
        // If in a real project I would create a feedback page
        alert("Data fetch failed!");
      }
    };
    loadData();
  }, [validation]);

  const loadMore = useCallback(async () => {
    if (nextPage) {
      const res = await fetchPosts(validation, nextPage);
      setPosts((current) => [...current, ...res.posts]);
      setNextPage(res.next_page);
    }
  }, [nextPage, validation]);

  // API call for the new post
  const saveData = useCallback(async (reply: string) => {
    try {
      const res = await savePost(title, userProfileImgUrl, reply);
      setPosts((current) => [...current, res]);
    } catch {
      alert("New Post Failed!");
    }
  }, []);

  // Go to the previous page and scroll to top
  const handleValidationToggleChange = useCallback(() => {
    setValidation((curr) => !curr);
    scrollTo(0, 0);
  }, []);

  return (
    <div className="font-text flex items-center flex-col">
      <Header
        toggleAction={handleValidationToggleChange}
        NewCommentBoxAction={() => setNewPostVisible(true)}
      />
      <PostsList posts={posts} loadMore={loadMore} NewCommentBoxAction={() => setNewPostVisible(true)} />
      <NewPost
        title="InnovationCast CHALLENGE!"
        userProfileImgUrl={logo}
        textareaPlaceholder="Leave your comment here! Be kind :)"
        classes={newPostVisible ? "block" : "hidden"}
        closeAction={() => setNewPostVisible(false)}
        saveDataAction={saveData}
      />
    </div>
  );
};

export default App;
