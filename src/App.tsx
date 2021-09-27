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
  const [totalPages, setTotalPages] = useState<number>(0);
  const [newPostVisible, setNewPostVisible] = useState<boolean>(false);
  const [validation, setValidation] = useState<boolean>(false);
  const [curPage, setCurPage] = useState<number>(1);

  // Set curPage, pagination, posts state.
  // It will run every time validation or curPage state changes
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchPosts(validation, curPage);
        setTotalPages(res.total_pages);
        setCurPage(res.page);
        setPosts(res.posts);
      } catch {
        // If in a real project I would create a feedback page
        alert("Data fetch failed!");
      }
    };
    loadData();
  }, [validation, curPage]);

  // API call for the new post
  const saveData = useCallback(async (reply: string) => {
    try {
      const res = await savePost(title, userProfileImgUrl, reply);
      setPosts((current) => [...current, res]);
    } catch {
      alert("New Post Failed!");
    }
  }, []);

  // Get the value from button tag to curPage and scroll to top
  const handlePaginationOnClick = useCallback((event: any) => {
    setCurPage(event.target.value);
    scrollTo(0, 0);
  }, []);

  // Go to the previous page and scroll to top
  const handlePagPreOnClick = useCallback(() => {
    if (curPage >= 2) {
      setCurPage(curPage - 1);
      scrollTo(0, 0);
    }
  }, []);

  // Go to the next page and scroll to top
  const handlePagNextOnClick = useCallback(() => {
    if (curPage < totalPages) {
      setCurPage(curPage + 1);
      scrollTo(0, 0);
    }
  }, []);

  // Go to the previous page and scroll to top
  const handleValidationToggleChange = useCallback(() => {
    setValidation(curr => !curr);
    setCurPage(1);
    scrollTo(0, 0);
  }, []);

  return (
    <div className="font-text flex items-center flex-col">
      <Header
        toggleAction={handleValidationToggleChange}
        NewCommentBoxAction={() => setNewPostVisible(true)}
      />
      <div className="flex flex-col items-end">
        <PostsList posts={posts} />
      </div>
      <NewPost
        title="InnovationCast CHALLENGE!"
        userProfileImgUrl={logo}
        textareaPlaceholder="Leave your comment here! Be kind :)"
        classes={newPostVisible ? "block" : "hidden"}
        closeAction={() => setNewPostVisible(false)}
        saveDataAction={saveData}
      />
      <Pagination
        page={curPage}
        totalPages={totalPages}
        handlePaginationOnClick={handlePaginationOnClick}
        handlePagNextOnClick={handlePagNextOnClick}
        handlePagPreOnClick={handlePagPreOnClick}
      />
    </div>
  );
};

export default App;
