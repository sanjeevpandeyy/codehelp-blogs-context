import { createContext, useState, useCallback } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  // Fetch Blog Data
  const fetchBlogPosts = useCallback(async (page = 1, tag = null, category = null) => {
    setLoading(true);
  
    let url = `${baseUrl}?page=${page}`;
  
    if (tag) {
      url += `&tag=${tag}`;
    }
  
    if (category) {
      url += `&category=${category}`;
    }
  
    console.log("Fetching URL:", url);
  
    try {
      const res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
  
      const data = await res.json();
      console.log("API Response:", data);
  
      setPage(data.page);
      setPosts(data.posts || []);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error in Fetching BlogPosts:", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    } finally {
      setLoading(false);
    }
  }, []);


  // Handle When Next and Previous button are clicked
  const handlePageChange = (page) => {
    navigate({search : `?page=${page}`});
    setPage(page);

  };


  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
