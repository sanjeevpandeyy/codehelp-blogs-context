import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
  
      <div className="max-w-5xl mx-auto px-5 pb-3 pt-20">
  
        <button
          onClick={() => navigation(-1)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>
  
        <div className="mt-8">
          {loading ? (
            <Spinner />
          ) : blog ? (
            <>
              <BlogDetails post={blog} />
  
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b pb-3">
                Related Blogs
              </h2>
  
              <div className="space-y-8">
                {relatedblog.map((post) => (
                  <BlogDetails key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="h-[60vh] flex justify-center items-center">
              <h2 className="text-3xl font-bold text-red-600">
                No Blog Found
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
