import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <div className="max-w-5xl mx-auto px-5 pb-3 pt-20">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>

        <h2 className="mt-6 -mb-20 text-3xl font-bold text-gray-800">
          Blogs in{" "}
          <span className="text-blue-600">
            #{category.replaceAll("-", " ")}
          </span>
        </h2>

        <div className="mt-8">
          <Blogs />
        </div>

        <div className="mt-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

