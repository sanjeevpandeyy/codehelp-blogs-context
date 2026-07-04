import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="max-w-5xl mx-auto px-4 pb-3 pt-20">
      {loading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[60vh] bg-white rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800">
            No Blogs Found
          </h2>
          <p className="mt-3 text-gray-500">
            Try another category or tag.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogDetails key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}