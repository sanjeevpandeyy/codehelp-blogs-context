import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 p-6">

      <NavLink to={`/blog/${post.id}`}>
        <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition">
          {post.title}
        </h2>
      </NavLink>

      <p className="mt-3 text-gray-600">
        By{" "}
        <span className="font-semibold text-blue-600">
          {post.author}
        </span>{" "}
        in{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
          className="font-semibold text-purple-600 hover:underline"
        >
          {post.category}
        </NavLink>
      </p>

      <p className="text-gray-500 text-sm mt-1">
        Posted on {post.date}
      </p>

      <p className="mt-5 leading-8 text-gray-700">
        {post.content}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-200 transition"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
